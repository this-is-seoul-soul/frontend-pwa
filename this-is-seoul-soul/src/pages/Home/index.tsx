import { FestInfoHomeItem } from 'components/atoms/festInfo/FestInfoHomeItem';
import { SearchBar } from 'components/organisms/SearchBar';
import { ListHeader } from 'components/molecules/ListHeader';
import { cls } from 'utils/cls';
import { festRecommendApi, searchFestApi } from 'apis/festApi';
import { useEffect, useState } from 'react';
import { FestDetailSearchType, FestType } from 'types/fest';
import { UserInfoType } from 'types/user';
import { sortList } from 'constants/sort';
import { userInfoApi } from 'apis/userApi';
// import InfiniteScroll from 'react-infinite-scroller';

// const FestDummy = [
//   {
//     festSeq: 4808,
//     title: '런던 심포니 [안토니오 파파노 & 유자 왕]',
//     codename: '전체',
//     mainImg:
//       'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=3cdefa3d97384b0482b182b92f436afa&thumb=Y',
//     startDate: '2024-10-01T09:00:00',
//     endDate: '2024-10-01T09:00:00',
//     useFee: '2024.4.25(목) 티켓오픈 예정',
//     avgPoint: 0,
//     cntReview: 0,
//     continue: false,
//     heart: false,
//   },
//   {
//     festSeq: 4808,
//     title: '런던 심포니 [안토니오 파파노 & 유자 왕]',
//     codename: '전체',
//     mainImg:
//       'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=3cdefa3d97384b0482b182b92f436afa&thumb=Y',
//     startDate: '2024-10-01T09:00:00',
//     endDate: '2024-10-01T09:00:00',
//     useFee: '2024.4.25(목) 티켓오픈 예정',
//     avgPoint: 0,
//     cntReview: 0,
//     continue: false,
//     heart: false,
//   },
//   {
//     festSeq: 4808,
//     title: '런던 심포니 [안토니오 파파노 & 유자 왕]',
//     codename: '전체',
//     mainImg:
//       'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=3cdefa3d97384b0482b182b92f436afa&thumb=Y',
//     startDate: '2024-10-01T09:00:00',
//     endDate: '2024-10-01T09:00:00',
//     useFee: '2024.4.25(목) 티켓오픈 예정',
//     avgPoint: 0,
//     cntReview: 0,
//     continue: false,
//     heart: false,
//   },
// ];

// const recommendDummy = [
//   {
//     festSeq: 8958,
//     title: '임종진 사진전',
//     codename: '전시/미술',
//     guname: '종로구',
//     place: '서울시청',
//     useTrgt: '전체',
//     isFree: '무료',
//     useFee: '',
//     startDate: '2023-05-10T09:00:00',
//     endDate: '2023-05-15T09:00:00',
//     lot: 37.5741966894963,
//     lat: 126.984430460968,
//     orgLink: 'http://www.galleryindex.co.kr/',
//     mainImg:
//       'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=79261d900b1b42a6b0bbba7e627a3e4a&thumb=Y',
//     avgPoint: 0,
//     cntReview: 0,
//     tag: null,
//     continue: false,
//     heart: false,
//   },
//   {
//     festSeq: 8958,
//     title: '임종진 사진전',
//     codename: '전시/미술',
//     guname: '종로구',
//     place: '서울시청',
//     useTrgt: '전체',
//     isFree: '무료',
//     useFee: '',
//     startDate: '2023-05-10T09:00:00',
//     endDate: '2023-05-15T09:00:00',
//     lot: 37.5741966894963,
//     lat: 126.984430460968,
//     orgLink: 'http://www.galleryindex.co.kr/',
//     mainImg:
//       'https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=79261d900b1b42a6b0bbba7e627a3e4a&thumb=Y',
//     avgPoint: 0,
//     cntReview: 0,
//     tag: null,
//     continue: false,
//     heart: false,
//   },
// ];

export const HomePage = () => {
  const [recommendFestList, setRecommendFestList] = useState<FestType[]>();
  const [festList, setFestList] = useState<FestType[]>();
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const [params, setParams] = useState<FestDetailSearchType>({
    isFree: false,
    isContinue: false,
    region: '전체',
    codename: '전체',
    sort: 1,
    page: 1,
    limit: 10,
  });

  // 내 회원 정보 불러오는 함수
  const handleGetMyInfo = async () => {
    const res = await userInfoApi();
    setUserInfo(res.data.data);
  };

  // 추천 목록 불러오는 함수
  const getRecommendedFestList = async () => {
    const result = await festRecommendApi();
    if (result.status === 200) {
      console.log('[홈-추천리스트 API] 성공', result.data.data);
      setRecommendFestList(result.data.data);
    } else {
      console.log('[홈-추천리스트 API] 실패', result);
    }
  };

  // 전체 목록 불러오는 함수 (정렬, 상세 검색 포함)
  const getSearchFestList = async () => {
    const result = await searchFestApi(params);
    if (result.status === 200) {
      console.log('[홈-전체목록 API] 성공', result.data.data);
      setFestList(result.data.data);
    } else {
      console.log('[홈-전체목록 API] 실패', result);
    }
  };

  const handleSort = (i: number) => {
    setParams((prev) => ({
      ...prev,
      sort: i,
    }));
  };

  useEffect(() => {
    console.log('[params 변경]', params);
    getSearchFestList();
  }, [params]);

  useEffect(() => {
    handleGetMyInfo();
    getRecommendedFestList();
    getSearchFestList();
  }, []);

  return (
    <div className={cls('w-full h-full bg-yellow-50')}>
      <SearchBar />
      <section>{/* TODO: 배너 */}</section>
      <section>
        <div className={cls('pl-6 pt-9 pb-3 text-lg bg-white')}>
          {userInfo?.nickname}님,
          <br />
          <b>이런 축제는 어떤가요?</b>
        </div>
        {/* <div className={cls('pl-2 pb-8 bg-white flex overflow-x-auto')}> */}
        <div className={cls('pl-2 pb-8 bg-white flex overflow-auto h-full')}>
          {recommendFestList && recommendFestList.length > 0 ? (
            recommendFestList.map((fest, index) => (
              <div key={index}>
                <FestInfoHomeItem fest={fest} />
              </div>
            ))
          ) : (
            <div>데이터가 없습니다.</div>
          )}
        </div>
      </section>
      <section>
        <div className={cls('pl-6 pt-9 pb-3 text-lg bg-white')}>
          <b>원하시는 축제</b>를 만나보세요!
        </div>
        <ListHeader total={24} sort={{ sortList: sortList, callback: handleSort }} />
        <div>{/*<InfiniteScroll></InfiniteScroll>*/}</div>
        <div className={cls('grid grid-cols-2 gap-4 p-5 pb-24 bg-white')}>
          {festList && festList?.length > 0 ? (
            festList.map((fest, index) => (
              <div key={index}>
                <FestInfoHomeItem fest={fest} />
              </div>
            ))
          ) : (
            <div>데이터가 없습니다.</div>
          )}
        </div>
      </section>
    </div>
  );
};
