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
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';

export const HomePage = () => {
  const LIMIT: number = 10;
  const [recommendFestList, setRecommendFestList] = useState<FestType[]>();
  const [userInfo, setUserInfo] = useState<UserInfoType>();
  const {
    items: festList,
    target,
    setParams,
  } = useInfiniteScroll<FestType, FestDetailSearchType>({
    fetchFn: searchFestApi,
    initialParams: {
      isFree: false,
      isContinue: false,
      region: '전체',
      codename: '전체',
      sort: 1,
      page: 0,
      limit: LIMIT,
    },
    setNextPage: (params) => ({ ...params, page: params.page + 1 }),
    hasMoreItems: (res) => res.length === LIMIT,
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
      setRecommendFestList(result.data.data);
    }
  };

  const handleSort = (i: number) => {
    setParams((prev) => ({
      ...prev,
      sort: i,
    }));
  };

  useEffect(() => {
    handleGetMyInfo();
    getRecommendedFestList();
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
        <ListHeader sort={{ sortList: sortList, callback: handleSort }} />
        <div className={cls('grid grid-cols-2 gap-4 p-5 pb-24 bg-white')}>
          {festList &&
            festList.map((fest, index) => (
              <div key={index}>
                <FestInfoHomeItem fest={fest} />
              </div>
            ))}
          <div ref={target}>로딩...</div>
        </div>
      </section>
    </div>
  );
};
