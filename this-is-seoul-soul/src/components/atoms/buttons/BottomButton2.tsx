import { cls } from 'utils/cls';

export interface BottomButton2Props {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  type?: ButtonType;
  color?: string;
  disabled?: boolean;
}

export type ButtonType = 'submit' | 'reset' | 'button' | undefined;

export const BottomButton2 = ({ onClick, title, type, color, disabled = false }: BottomButton2Props) => {
  return (
    <div className={cls('font-bold text-xl w-full left-0 bottom-12 px-4 pb-4')}>
      <button
        type={type}
        onClick={onClick}
        className={cls(`w-full ${disabled ? 'bg-gray-200' : 'bg-yellow-200 '} rounded-2xl p-3`)}
        color={color}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  );
};
