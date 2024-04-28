import {
  CheckNicknamePage,
  FestiTestLandingPage,
  FestiTestProsecutorPage,
  signInPage,
  FestDetailPage,
  ReviewCreatePage,
} from 'constants/pathname';
import { createSearchParams, useNavigate } from 'react-router-dom';

export const useAppNavigation = () => {
  const navigate = useNavigate();

  // 로그인
  const navigateToSignIn = () => {
    navigate(signInPage.path);
  };

  // 닉네임 입력
  const navigateToCheckNickname = () => {
    navigate(CheckNicknamePage.path);
  };

  // festi 테스트 랜딩 화면
  const navigateToFestiTestLanding = () => {
    navigate(FestiTestLandingPage.path);
  };

  // FESTI 테스트 화면
  const navigateToFestiTestProsecutor = () => {
    navigate(FestiTestProsecutorPage.path);
  };

  // 축제 아이템 상세 화면
  const navigateToFestDetail = (festSeq: number) => {
    navigate({
      pathname: FestDetailPage.path,
      search: createSearchParams({
        festSeq: `${festSeq}`
      }).toString()
    });
  };

  // 리뷰 등록 화면
  const navigateToReviewCreate = (rating: number, festSeq: number) => {
    navigate(
      {
        pathname: ReviewCreatePage.path,
        search: createSearchParams({
          festSeq: `${festSeq}`
        }).toString()
      },
      {
        state: { rating: rating }
      }
    );
  };


  return {
    navigateToSignIn,
    navigateToCheckNickname,
    navigateToFestiTestLanding,
    navigateToFestiTestProsecutor,
    navigateToFestDetail,
    navigateToReviewCreate,
  };
};
