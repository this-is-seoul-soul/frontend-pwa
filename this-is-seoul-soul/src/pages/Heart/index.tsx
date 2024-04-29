import { FestInfoMapItem } from 'components/atoms/festInfo/FestInfoMapItem';
import { ListHeader } from 'components/molecules/ListHeader';
import { useEffect, useState } from 'react';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { FestType } from 'types/fest';
import { cls } from 'utils/cls';

const FestDummy: FestType[] = [
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: true,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: true,
  },
];

export const HeartPage = () => {
  const [heartFest, setHeartFest] = useState<FestType[]>(FestDummy);

  useEffect(() => {
    const handleHeartFest = async () => {
      // TODO: 찜 누른 장소 조회
      setHeartFest(FestDummy);
    };

    handleHeartFest();
  }, []);

  return (
    <div className={cls('pt-4')}>
      <div>
        <ListHeader total={heartFest.length} />
      </div>
      <div>
        {heartFest.length > 0 ? (
          <div>
            {heartFest.map((fest) => (
              <FestInfoMapItem fest={fest} />
            ))}
          </div>
        ) : (
          <div className={cls('max-w-full mt-32 relative flex justify-center items-center')}>
            <div>
              <IoAlertCircleOutline size={40} className={cls('mx-auto my-2')} />
              <div className={cls('text-sm')}>저장된 장소가 없습니다.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
