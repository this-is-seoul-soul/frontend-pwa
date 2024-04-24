import { FaArrowsRotate } from 'react-icons/fa6';
import { cls } from 'utils/cls';

export interface ReissueIconButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ReissueIconButton = ({ onClick }: ReissueIconButtonProps) => {
  return (
    <div className={cls('w-14 h-14 rounded-2xl bg-yellow-200 flex justify-center items-center')}>
      <button
        className={cls('w-full h-full flex justify-center items-center')} // 버튼도 가운데 정렬
        type='button'
        onClick={onClick}
      >
        <FaArrowsRotate size={24} />
      </button>
    </div>
  );
};
