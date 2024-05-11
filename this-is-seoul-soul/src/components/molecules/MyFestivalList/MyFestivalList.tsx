import { myFestInfoApi } from 'apis/festApi';
import { FestInfoMapItem } from 'components/atoms/festInfo/FestInfoMapItem';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { FestType } from 'types/fest';

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
    <div>
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
      <div>
        {festivals.map((fest) => (
          <FestInfoMapItem fest={fest} />
        ))}
      </div>
    </div>
  );
};
