import { ChangeEvent, useEffect, useState } from 'react';
import { GoStar, GoStarFill } from 'react-icons/go';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MdAddAPhoto } from 'react-icons/md';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { TitleSection } from 'components/atoms/titles/TitleReviewSection';
import { ReviewCreateGoodList } from 'components/molecules/ReviewCreateGoodList/ReviewCreateGoodList';
import { BottomButton2 } from 'components/atoms/buttons/BottomButton2';
import { useForm, FormProvider } from 'react-hook-form';
import { goodList } from 'constants/review';

/* Request Dto
{
    “content”: “정말 좋아요”,
    “point”: 5,
    “imgUrl”: [ “image1.jpg”, “image2.jpg” ],
    “tag”: [1, 2, 4],
    “festSeq”: 2
}
*/

interface FormData {
  content: string;
  point: number;
  tag: Array<number>;
}

export const ReviewCreatePage = () => {
  const navigation = useAppNavigation();
  const MAX_LENGTH = 10;
  // let [inputCount, setInputCount] = useState(0);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const param = searchParams.get('festSeq') || '';
  const festSeq = parseInt(param);

  // const [rating, setRating] = useState<number>(location.state.rating);
  const methods = useForm<FormData>({
    defaultValues: {
      point: location.state.rating,
      content: '',
      tag: [],
    },
  });
  const { register, handleSubmit, setValue, watch } = methods;

  // const handleStarClick = (starNumber: number) => {
  //   // setRating(starNumber);
  //   setValue('point', starNumber);
  // };

  const handleContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    if (text.length > MAX_LENGTH) {
      return;
    }
    setValue('content', text);
    // setInputCount(text.length);
  };

  useEffect(() => {
    console.log(watch());
  }, [watch()]);

  const onSubmit = (data: any) => {
    // TODO: 리뷰 등록 api 연결
    console.log('완료!', data);
    navigation.navigateToFestDetail(festSeq);
  };

  const starArr = [1, 2, 3, 4, 5];

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <div className="flex flex-col items-center gap-2 pt-16">
            <div className="flex justify-center gap-1">
              {starArr.map((starNum) => (
                <span key={starNum} onClick={() => setValue('point', starNum)}>
                  {starNum <= watch('point') ? (
                    <GoStarFill size={52} className="text-yellow-400" />
                  ) : (
                    <GoStar size={52} className="text-gray-300" />
                  )}
                </span>
              ))}
            </div>
            <div className="text-xl">
              <span className="font-bold">{watch('point')}</span> / 5
            </div>
          </div>
        </section>

        <section className="pt-8 px-8 flex">
          <div className="w-[76px] min-w-[76px] h-[76px] flex justify-center items-center mr-1 bg-white border border-yellow-400 rounded-lg">
            <MdAddAPhoto size={36} className="text-yellow-400 mr-[4px]" />
          </div>
          <div className="flex gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <img
              className=" w-[76px] h-[76px] object-cover border-2 border-gray-200 rounded-lg"
              src="https://i.namu.wiki/i/alELF6s0wKly1dUXn2vjdDYFbOjrxITYnTEEHAB-1cNqjwOT56cOT8QTNdzPqWTndhqH2ZkTt-YAkVMmkOveiWfXG8MDhDbzvU5dgUjiDsRdvI-KYLm4_JNO96-PiPevkQsBFJr-XObx1BGfL3COog.webp"
              alt=""
            />
            <img
              className=" w-[76px] h-[76px] object-cover border-2 border-gray-200 rounded-lg"
              src="https://i.namu.wiki/i/alELF6s0wKly1dUXn2vjdDYFbOjrxITYnTEEHAB-1cNqjwOT56cOT8QTNdzPqWTndhqH2ZkTt-YAkVMmkOveiWfXG8MDhDbzvU5dgUjiDsRdvI-KYLm4_JNO96-PiPevkQsBFJr-XObx1BGfL3COog.webp"
              alt=""
            />
            <img
              className=" w-[76px] h-[76px] object-cover border-2 border-gray-200 rounded-lg"
              src="https://i.namu.wiki/i/alELF6s0wKly1dUXn2vjdDYFbOjrxITYnTEEHAB-1cNqjwOT56cOT8QTNdzPqWTndhqH2ZkTt-YAkVMmkOveiWfXG8MDhDbzvU5dgUjiDsRdvI-KYLm4_JNO96-PiPevkQsBFJr-XObx1BGfL3COog.webp"
              alt=""
            />
            <img
              className=" w-[76px] h-[76px] object-cover border-2 border-gray-200 rounded-lg"
              src="https://i.namu.wiki/i/alELF6s0wKly1dUXn2vjdDYFbOjrxITYnTEEHAB-1cNqjwOT56cOT8QTNdzPqWTndhqH2ZkTt-YAkVMmkOveiWfXG8MDhDbzvU5dgUjiDsRdvI-KYLm4_JNO96-PiPevkQsBFJr-XObx1BGfL3COog.webp"
              alt=""
            />
            <img
              className="w-[76px] h-[76px] object-cover border-2 border-gray-200 rounded-lg"
              src="https://img.kbs.co.kr/kbs/620/news.kbs.co.kr/data/fckeditor/new/image/2024/04/01/169771711958787915.jpg"
              alt=""
            />
          </div>
        </section>

        <section className="px-8 py-4">
          <textarea
            {...register('content', {
              required: true,
            })}
            value={watch('content')}
            onChange={handleContent}
            placeholder="리뷰를 작성하세요."
            className="p-4 w-full h-56 border border-gray-500 rounded-lg focus:outline-none  focus-visible:border-yellow-400 resize-none"
          />
          <div className="flex justify-end text-gray-500">
            <span>{watch('content')?.length}</span>
            <span>/{MAX_LENGTH} 자</span>
          </div>
        </section>

        <section className="p-8">
          <TitleSection title="어떤 점이 좋았나요?" description="1개 이상 선택해주세요" />
          <ReviewCreateGoodList />
        </section>

        <BottomButton2
          title="완료"
          type="submit"
          disabled={watch('content').length === 0 || watch('tag').length === 0 ? true : false}
        />
      </form>
    </FormProvider>
  );
};
