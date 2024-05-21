import { searchFestApi } from 'apis/festApi';
import { FestInfoHomeItem } from 'components/atoms/festInfo/FestInfoHomeItem';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { FestDetailSearchType, FestType } from 'types/fest';
import { cls } from 'utils/cls';

export const ScrollPage = () => {
  const LIMIT = 10;
  const { items, target } = useInfiniteScroll<FestType, FestDetailSearchType>({
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

  return (
    <div>
      <div className={cls('grid grid-cols-2 gap-4 p-5 pb-24 bg-white')}>
        {items.map((fest) => (
          <FestInfoHomeItem key={fest.festSeq} fest={fest} />
        ))}
      </div>
      <div ref={target}>로딩...</div>
    </div>
  );
};
