import { festivalRegisterApi } from 'apis/festApi';
import { CategorizeFestivalInputText } from 'components/atoms/inputs/CategorizeFestivalInputText';
import { RegisterFormInputText } from 'components/atoms/inputs/RegisterFormInputText';
import { useForm } from 'react-hook-form';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { FestivalRegisterType } from 'types/fest';
import { cls } from 'utils/cls';

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
  const { handleSubmit, control } = useForm({
    defaultValues: {
      title: '',
      codeName: '뮤지컬/오페라',
      guName: '구로구',
      place: address,
      useTrgt: '7세 이상',
      isFree: '유료',
      useFee: 'R 50,000원 / S 40,000원 / A 30,000원',
      startDate: '2024-05-10',
      endDate: '2024-05-29',
      lot: position.lat,
      lat: position.lng,
      mainImg: '',
    },
  });

  const onSubmit = async (data: FestivalRegisterType) => {
    // form 데이터를 처리할 로직 추가
    console.log(data);
    const res = await festivalRegisterApi(data);
    console.log(res);
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
        <CategorizeFestivalInputText name='codeName' placeholder='행사 이름을 작성하세요.' />
        <div>행사 분류</div>
        <div>이용 대상</div>
        <div>이용 요금</div>
        <div>행사 기간</div>
        <div>사진 첨부</div>
        <div className={cls('font-bold text-xl w-full px-4 pb-12')}>
          <button className='w-full bg-yellow-300 rounded-xl py-2'>완료</button>
        </div>
      </form>
    </div>
  );
};
