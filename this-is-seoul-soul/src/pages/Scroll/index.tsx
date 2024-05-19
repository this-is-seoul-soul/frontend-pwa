import { searchFestApi } from 'apis/festApi';
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
    getNextParams: (cur) => ({ ...cur, page: cur.page + 1 }),
    hasMoreItems: (res) => res.length === LIMIT,
  });

  return (
    <div>
      Scroll Page
      <ul>
        {items.map((fest) => (
          <li key={fest.festSeq}>
            <h2>{fest.title}</h2>
            <img src={fest.mainImg} alt={fest.title} />
            <p>
              {fest.startDate} - {fest.endDate}
            </p>
            <p>{fest.useFee}</p>
          </li>
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
