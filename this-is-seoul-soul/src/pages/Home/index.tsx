import { FestInfoHomeItem } from 'components/atoms/festInfo/FestInfoHomeItem';
import { SearchBar } from 'components/organisms/SearchBar';
import { ListHeader } from 'components/molecules/ListHeader';
import { cls } from 'utils/cls';
import { searchFestApi } from 'apis/festApi';
import { useEffect, useState } from 'react';
import { searchRequestType } from 'types/fest';
// import InfiniteScroll from 'react-infinite-scroller';

const FestDummy = [
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
];

export const HomePage = () => {
  //const [festList, setFestList] = useState();
  const nickname = '핏짜';
  const [params, setParams] = useState<searchRequestType>({
    isFree: false,
    isContinue: false,
    region: '전체',
    codename: '전체',
    sort: 0,
    page: 1,
    limit: 10,
  });

  const getSearchFestList = async () => {
    const res = await searchFestApi(params);
    console.log(res);
  };

  const handleSort = (i: number) => {
    setParams((prev) => ({
      ...prev,
      sort: i,
    }));
  };

  useEffect(() => {
    console.log(params);
  }, [params]);

  useEffect(() => {
    getSearchFestList();
  }, []);

  return (
    <div className={cls('w-full h-full bg-yellow-50')}>
      <SearchBar />
      <section>{/* TODO: 배너 */}</section>
      <section>
        <div className={cls('pl-6 pt-9 pb-3 text-lg bg-white')}>
          {nickname}님,
          <br />
          <b>이런 축제는 어떤가요?</b>
        </div>
        {/* <div className={cls('pl-2 pb-8 bg-white flex overflow-x-auto')}> */}
        <div className={cls('pl-2 pb-8 bg-white flex overflow-auto h-full')}>
          {FestDummy.length > 0 &&
            FestDummy.map((fest, index) => (
              <div key={index}>
                <FestInfoHomeItem fest={fest} />
              </div>
            ))}
        </div>
      </section>
      <section>
        <div className={cls('pl-6 pt-9 pb-3 text-lg bg-white')}>
          <b>원하시는 축제</b>를 만나보세요!
        </div>
        <ListHeader total={24} sort={handleSort} />
        <div>{/*<InfiniteScroll></InfiniteScroll>*/}</div>
        <div className={cls('grid grid-cols-2 gap-4 p-5 pb-24 bg-white')}>
          {FestDummy.length > 0 &&
            FestDummy.map((fest, index) => (
              <div key={index}>
                <FestInfoHomeItem fest={fest} />
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};
