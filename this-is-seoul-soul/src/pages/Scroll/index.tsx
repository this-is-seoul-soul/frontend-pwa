import { searchFestApi } from 'apis/festApi';
import { FestInfoHomeItem } from 'components/atoms/festInfo/FestInfoHomeItem';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';
import { FestDetailSearchType, FestType } from 'types/fest';

export const ScrollPage = () => {
  const LIMIT = 10;
  const { items, loaderRef, hasMore } = useInfiniteScroll<FestType, FestDetailSearchType>({
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
    getNextParams: (params, curPage) => ({ ...params, page: curPage }),
    hasMoreItems: (res) => res.length === LIMIT,
  });

  return (
    <div>
      Scroll Page
      <ul>
        {items.map((fest) => (
          <FestInfoHomeItem key={fest.festSeq} fest={fest} />
        ))}
      </ul>
      {hasMore && (
        <div ref={loaderRef} style={{ height: '100px', background: 'lightgray' }}>
          Loading...
        </div>
      )}
    </div>
  );
};
