import { AxiosResponse } from 'axios';
import { useEffect, useRef, useState } from 'react';

interface useInfiniteScrollProps<T, P> {
  fetchFn: (params: P) => Promise<AxiosResponse>;
  initialParams: P;
  getNextParams: (currentParams: P) => P;
  hasMoreItems: (response: T[]) => boolean;
}

export const useInfiniteScroll = <T, P>({
  fetchFn,
  initialParams,
  getNextParams,
  hasMoreItems,
}: useInfiniteScrollProps<T, P>) => {
  const [items, setItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [params, setParams] = useState<P>(initialParams);
  const loaderRef = useRef<HTMLDivElement | null>(null); // 사용하는 컴포넌트에서 반드시 써야함

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetchFn(params);
        const data = (await response.data) as T[];
        setItems((prev) => [...prev, ...data]);
        setHasMore(hasMoreItems(data));
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };

    fetchItems();
  }, [fetchFn, params]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setParams((prevParams) => getNextParams(prevParams));
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore, getNextParams]);

  return { items, loaderRef, hasMore };
};
