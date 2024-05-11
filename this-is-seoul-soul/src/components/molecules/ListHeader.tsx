import { SortInputText } from 'components/atoms/inputs/SortInputText';
import { cls } from 'utils/cls';

interface ListHeaderProps {
  total?: number;
  sort?: {
    sortList: { [key: string]: number };
    callback: (sortId: number) => void;
  };
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
      {sort && <SortInputText sortList={sort.sortList} setValue={sort.callback} />}
    </div>
  );
};
