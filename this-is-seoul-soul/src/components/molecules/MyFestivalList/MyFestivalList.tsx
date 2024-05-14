import { myFestInfoApi } from 'apis/festApi';
import { FestInfoMapItem } from 'components/atoms/festInfo/FestInfoMapItem';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { FestType } from 'types/fest';
import LogoCharacter from 'assets/images/LogoCharacter.png';

export const MyFestivalList = () => {
  const [festivals, setFestivals] = useState<FestType[]>([]);
  const navigation = useAppNavigation();

  const handleMoveFestivalRegistration = () => {
    navigation.navigateToFestivalRegister();
  };

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        const res = await myFestInfoApi();

        if (res.status === 200) {
          console.log('내 축제 조회 성공');
          setFestivals(res.data.data);
        }
      } catch (error) {
        console.error('Failed to fetch festivals:', error);
      }
    };

    fetchFestivals();
  }, []);

  return (
    <div className='w-full  h-[75%]'>
      <div className='flex justify-between items-center py-4'>
        <div className='font-bold text-base'>축제</div>
        <div
          className='flex items-center gap-1 text-gray-800 text-xs'
          onClick={handleMoveFestivalRegistration}
        >
          <div>등록하기</div>
          <FaAngleRight />
        </div>
      </div>
      <div className='w-full h-full'>
        {festivals.length === 0 ? (
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <div>
              <img src={LogoCharacter} alt='이미지 없음' className='grayscale w-12 pb-4' />
            </div>
            <div className='text-sm text-gray-500 font-PretendardExtraLight'>
              지금까지 작성한 축제가 없습니다.
            </div>
          </div>
        ) : (
          <div className='pb-20'>
            {festivals.map((fest) => (
              <FestInfoMapItem fest={fest} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
