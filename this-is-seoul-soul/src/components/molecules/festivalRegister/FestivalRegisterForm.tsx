import { festivalRegisterApi } from 'apis/festApi';
import { CalendarInputText } from 'components/atoms/inputs/CalendarInputText';
import { CategorizeFestivalInputText } from 'components/atoms/inputs/CategorizeFestivalInputText';
import { PictureRegisterFormInputText } from 'components/atoms/inputs/PictureRegisterFormInputText';
import { PriceInputText } from 'components/atoms/inputs/PriceInputText';
import { RegisterFormInputText } from 'components/atoms/inputs/RegisterFormInputText';
import { TargetAudienceInputText } from 'components/atoms/inputs/TargetAudienceInputText';
import { myPage } from 'constants/pathname';
import { useForm } from 'react-hook-form';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useNavigate } from 'react-router-dom';
import { FestivalRegisterType } from 'types/fest';
import { cls } from 'utils/cls';

type FormData = {
  title: string;
  codeName: string;
  guName: string;
  place: string;
  useTrgt: string;
  isFree: string;
  useFee: string;
  startDate: string;
  endDate: string;
  lot: number;
  lat: number;
  mainImg: string;
};

type FestivalRegisterFormType = {
  position: { lat: number; lng: number };
  address: string;
  setLocation: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FestivalRegisterForm = ({
  position,
  address,
  setLocation,
}: FestivalRegisterFormType) => {
  const addressParts = address.split(' ');
  const guName = addressParts[1];
  const navigate = useNavigate();

  const { handleSubmit, control, setValue, getValues } = useForm<FormData>({
    defaultValues: {
      title: '',
      codeName: '',
      guName: guName,
      place: address,
      useTrgt: '',
      isFree: '',
      useFee: '',
      startDate: '',
      endDate: '',
      lot: position.lat,
      lat: position.lng,
      mainImg: '',
    },
  });

  const onSubmit = async (data: FestivalRegisterType) => {
    // form 데이터를 처리할 로직 추가
    if (data.isFree === '무료') {
      data.useFee = '무료';
    } else {
      data.useFee = '유료';
    }
    const res = await festivalRegisterApi(data);
    console.log(res);
    if (res.status === 201) {
      navigate(myPage.path, { replace: true });
    } else {
      console.log('등록 실패');
    }
  };

  return (
    <div className='w-full h-full px-4 pt-14'>
      <div className='h-52 z-20 bg-red-50 rounded-2xl overflow-hidden'>
        <Map
          id='map'
          center={{
            lat: position.lat,
            lng: position.lng,
          }}
          style={{
            width: '100%',
            height: '100%',
          }}
          level={3}
          draggable={false}
          disableDoubleClickZoom={true}
        >
          <MapMarker position={position} />
        </Map>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='pt-5'>
        <RegisterFormInputText
          name='place'
          label='행사 위치'
          control={control}
          placeholder={address}
          setLocation={setLocation}
          disabled={true}
          defaultValue={address}
        />
        <RegisterFormInputText
          name='title'
          label='행사 이름'
          control={control}
          placeholder='행사 이름을 작성하세요.'
        />
        <CategorizeFestivalInputText
          name='codeName'
          label='행사 분류'
          placeholder='분류를 선택해주세요.'
          control={control}
          setValue={setValue}
        />
        <TargetAudienceInputText
          name='useTrgt'
          label='이용 대상'
          placeholder='이용 대상을 선택해주세요.'
          control={control}
          setValue={setValue}
          getValues={getValues}
        />
        <PriceInputText
          name='isFree'
          label='이용 요금'
          placeholder='이용 요금을 선택해주세요.'
          control={control}
          setValue={setValue}
        />
        <CalendarInputText
          nameFirst='startDate'
          nameSecond='endDate'
          label='행사 기간'
          placeholderFirst='행사 시작일'
          placeholdSecond='행사 마감일'
          control={control}
          setValue={setValue}
        />
        <PictureRegisterFormInputText name='mainImg' label='사진 첨부' setValue={setValue} />
        <div className={cls('font-bold text-xl w-full px-4 pb-12 pt-6')}>
          <button className='w-full bg-yellow-300 rounded-xl py-2'>완료</button>
        </div>
      </form>
    </div>
  );
};
