import { ChangeEvent, useState } from 'react';
import { GoStar, GoStarFill } from 'react-icons/go';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { MdAddAPhoto } from 'react-icons/md';
import { TitleSection } from 'components/atoms/titles/TitleReviewSection';
import { ReviewCreateGoodList } from 'components/molecules/ReviewCreateGoodList/ReviewCreateGoodList';
import { BottomButton2 } from 'components/atoms/buttons/BottomButton2';
import { useForm, FormProvider } from 'react-hook-form';
import { cls } from 'utils/cls';
import { reviewRegisterApi } from 'apis/festApi';
import { ReviewRegisterType } from 'types/festDetail';
import { FestDetailPage } from 'constants/pathname';

export const ReviewCreatePage = () => {
  const MAX_LENGTH = 100;
  const STARS = [1, 2, 3, 4, 5];
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const param = searchParams.get('festSeq') || '';
  const festSeq = parseInt(param);
  const navigate = useNavigate();

  const methods = useForm<ReviewRegisterType>({
    defaultValues: {
      point: location.state.rating,
      content: '',
      imgUrl: [],
      tag: [],
      festSeq: festSeq,
    },
  });

  const { register, handleSubmit, setValue, watch } = methods;

  const handleContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    if (text.length > MAX_LENGTH) {
      return;
    }
    setValue('content', text);
  };

  const [imgUrls, setImgUrls] = useState<string[]>([]);
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const updatedImgUrls = imgUrls.concat(URL.createObjectURL(file));
      setImgUrls(updatedImgUrls);
      setValue('imgUrl', [...watch('imgUrl'), file.name]);
    }
  };

  const onSubmit = async (data: ReviewRegisterType) => {
    console.log('리뷰 등록 data', data);
    const result = await reviewRegisterApi(data);
    if (result.status === 201) {
      navigate(`${FestDetailPage.path}?festSeq=${festSeq}`, { replace: true });
    } else {
      console.log('등록 실패');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <div className={cls('flex flex-col items-center gap-2 pt-16')}>
            <div className={cls('flex justify-center gap-1')}>
              {STARS.map((starNum) => (
                <span key={starNum} onClick={() => setValue('point', starNum)}>
                  {starNum <= watch('point') ? (
                    <GoStarFill size={52} className={cls('text-yellow-400')} />
                  ) : (
                    <GoStar size={52} className={cls('text-gray-300')} />
                  )}
                </span>
              ))}
            </div>
            <div className={cls('text-xl')}>
              <span className={cls('font-bold')}>{watch('point')}</span> / 5
            </div>
          </div>
        </section>

        <section className={cls('pt-8 px-8 flex')}>
          <div
            className={cls(
              'w-[76px] min-w-[76px] h-[76px] flex justify-center items-center mr-1 bg-white border border-yellow-400 rounded-lg'
            )}
          >
            <label htmlFor='photo'>
              <MdAddAPhoto size={36} className={cls('text-yellow-400 mr-[4px]')} />
            </label>
            <input
              id='photo'
              type='file'
              accept='image/*'
              onChange={handleImageUpload}
              className='hidden'
            />
          </div>
          <div
            className={cls(
              'flex flex-row-reverse gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide'
            )}
          >
            {imgUrls.map((item, idx) => {
              return (
                <img
                  key={idx}
                  className={cls(
                    'w-[76px] h-[76px] object-cover border-2 border-gray-200 rounded-lg'
                  )}
                  src={item}
                  alt='img'
                />
              );
            })}
          </div>
        </section>

        <section className={cls('px-8 py-4')}>
          <textarea
            {...register('content', {
              required: true,
            })}
            value={watch('content')}
            onChange={handleContent}
            placeholder='리뷰를 작성하세요.'
            className={cls(
              'p-4 w-full h-56 border border-gray-500 rounded-lg focus:outline-none  focus-visible:border-yellow-400 resize-none'
            )}
          />
          <div className={cls('flex justify-end text-gray-500')}>
            <span>{watch('content')?.length}</span>
            <span>/{MAX_LENGTH} 자</span>
          </div>
        </section>

        <section className={cls('p-8')}>
          <TitleSection title='어떤 점이 좋았나요?' description='1개 이상 선택해주세요' />
          <ReviewCreateGoodList />
        </section>

        <BottomButton2
          title='완료'
          type='submit'
          disabled={watch('content').length === 0 || watch('tag').length === 0 ? true : false}
        />
      </form>
    </FormProvider>
  );
};
