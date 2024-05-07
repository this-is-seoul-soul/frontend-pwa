import {
  FestDetailPage,
  FestivalRegisterPage,
  MyReviewDetailsPage,
  SettingPage,
  ReviewCreatePage,
  privatePolicyPage,
} from 'constants/pathname';
import { TopHeaderBase } from './TopHeaderBase';

interface TopHeaderProps {
  label: string;
}

export const TopHeader = ({ label }: TopHeaderProps) => {
  return (
    <>
      {(label === FestDetailPage.label ||
        label === ReviewCreatePage.label ||
        label === SettingPage.label ||
        label === MyReviewDetailsPage.label ||
        label === FestivalRegisterPage.label ||
        label === privatePolicyPage.label) && <TopHeaderBase back title={label} />}
    </>
  );
};
