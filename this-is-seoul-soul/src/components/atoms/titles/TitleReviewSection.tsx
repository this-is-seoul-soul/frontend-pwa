import { cls } from 'utils/cls';

interface TitleSectionProps {
  title: string;
  description?: string;
}

export const TitleSection = ({ title, description }: TitleSectionProps) => {
  return (
    <div>
      <div className={cls('text-lg font-bold')}>{title}</div>
      <div className={cls('text-sm text-gray-800')}>{description}</div>
    </div>
  );
};
