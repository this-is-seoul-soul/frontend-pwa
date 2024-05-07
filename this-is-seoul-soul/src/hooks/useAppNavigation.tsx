import {
  CheckNicknamePage,
  FestiTestLandingPage,
  FestiTestProsecutorPage,
  signInPage,
  FestDetailPage,
  ReviewCreatePage,
  SettingPage,
  MyReviewDetailsPage,
  FestivalRegisterPage,
  SearchPage,
  privatePolicyPage,
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
        festSeq: `${festSeq}`,
      }).toString(),
    });
  };

  // 리뷰 등록 화면
  const navigateToReviewCreate = (rating: number, festSeq: number) => {
    navigate(
      {
        pathname: ReviewCreatePage.path,
        search: createSearchParams({
          festSeq: `${festSeq}`,
        }).toString(),
      },
      {
        state: { rating: rating },
      }
    );
  };

  // 설정 화면
  const navigateToSetting = () => {
    navigate(SettingPage.path);
  };

  // 내 리뷰 상세 보기
  const navigateToMyReviewDetails = () => {
    navigate(MyReviewDetailsPage.path);
  };

  // 축제 등록하는 페이지
  const navigateToFestivalRegister = () => {
    navigate(FestivalRegisterPage.path);
  };

  // 검색하기
  const navigateToSearch = () => {
    navigate(SearchPage.path);
  };

  // 개인정보처리방침
  const navigateToPrivatePolicy = () => {
    navigate(privatePolicyPage.path);
  };

  return {
    navigateToSignIn,
    navigateToCheckNickname,
    navigateToFestiTestLanding,
    navigateToFestiTestProsecutor,
    navigateToFestDetail,
    navigateToReviewCreate,
    navigateToSetting,
    navigateToMyReviewDetails,
    navigateToFestivalRegister,
    navigateToSearch,
    navigateToPrivatePolicy,
  };
};
