import { cls } from 'utils/cls';

export interface BottomButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  type?: ButtonType;
  color?: string;
  disabled?: boolean;
}

export type ButtonType = 'submit' | 'reset' | 'button' | undefined;

export const BottomButton = ({ onClick, title, type, color, disabled = false }: BottomButtonProps) => {
  return (
    <div className={cls('z-20 font-bold text-xl absolute w-full left-0 bottom-12 px-4')}>
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
