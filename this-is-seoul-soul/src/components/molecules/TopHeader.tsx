import {
  FestDetailPage,
  FestivalRegisterPage,
  MyReviewDetailsPage,
  SettingPage,
  ReviewCreatePage,
} from 'constants/pathname';
import { useAtomValue } from "jotai";
import { headerTitleAtom } from "stores/headerStore";
import { TopHeaderBase } from "./TopHeaderBase";

interface TopHeaderProps {
  label: string;
}

export const TopHeader = ({ label }: TopHeaderProps) => {
  const headerTitle = useAtomValue(headerTitleAtom);

  return (
    <>
      {label === FestDetailPage.label && <TopHeaderBase back title={headerTitle} />}
      {label === ReviewCreatePage.label && <TopHeaderBase back title={headerTitle} />}
      {(label === SettingPage.label ||
        label === MyReviewDetailsPage.label ||
        label === FestivalRegisterPage.label) && <TopHeaderBase back title={label} />}
    </>
  );
};
