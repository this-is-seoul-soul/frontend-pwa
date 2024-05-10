import { IoIosArrowDown } from 'react-icons/io';
import { cls } from 'utils/cls';

interface ListHeaderProps {
  total?: number;
  sort?: (index: number) => void;
}

export const ListHeader = ({ total, sort }: ListHeaderProps) => {
  return (
    <div className={cls('flex justify-between items-center px-6 bg-white')}>
      {total ? (
        <div>
          총 <span className={cls('text-yellow-400 font-bold')}>{total}</span>개
        </div>
      ) : (
        <div></div>
      )}
      {sort && (
        <div onClick={() => sort(1)} className={cls('flex items-center')}>
          추천순 <IoIosArrowDown className={cls('mt-1 pl-1')} />
        </div>
      )}
    </div>
  );
};
