import { festHeartInfoApi } from 'apis/festApi';
import { FestInfoMapItem } from 'components/atoms/festInfo/FestInfoMapItem';
import { ListHeader } from 'components/molecules/ListHeader';
import { useEffect, useState } from 'react';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { FestType } from 'types/fest';
import { cls } from 'utils/cls';

export const HeartPage = () => {
  const [heartFest, setHeartFest] = useState<FestType[]>([]);

  const handleHeartFest = async () => {
    // TODO: 찜 누른 장소 조회
    const res = await festHeartInfoApi();

    setHeartFest(res.data.data);
    return res.data;
  };

  useEffect(() => {
    handleHeartFest();
  }, []);

  return (
    <div className={cls('pt-4 w-full h-full')}>
      <div>
        <ListHeader total={heartFest.length} />
      </div>
      <div>
        {heartFest.length > 0 ? (
          <div className='pb-20'>
            {heartFest.map((fest) => (
              <FestInfoMapItem fest={fest} />
            ))}
          </div>
        ) : (
          <div className={cls('w-full h-screen absolute top-0 flex justify-center items-center')}>
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
