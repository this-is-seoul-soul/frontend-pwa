import { AxiosResponse } from 'axios';
import { useEffect, useRef, useState } from 'react';

interface useInfiniteScrollProps<T, P> {
  fetchFn: (params: P) => Promise<AxiosResponse>;
  initialParams: P;
  setNextPage: (params: P) => P;
  hasMoreItems: (response: T[]) => boolean;
}

export const useInfiniteScroll = <T, P>({
  fetchFn,
  initialParams,
  setNextPage,
  hasMoreItems,
}: useInfiniteScrollProps<T, P>) => {
  const [items, setItems] = useState<T[]>([]);
  const [params, setParams] = useState<P>(initialParams);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const target = useRef<HTMLDivElement | null>(null);

  const observer = useRef<IntersectionObserver>(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setParams((prev) => setNextPage(prev));
      });
    })
  );

  useEffect(() => {
    if (!hasMore) return;
    const getData = async () => {
      const response = await fetchFn(params);
      const data = (await response.data.data) as T[];
      setItems((prev) => [...prev, ...data]);
      setHasMore(hasMoreItems(data));
    };
    getData();
  }, [params]);

  useEffect(() => {
    if (target.current) {
      const unobserve = observe(target.current);
      return () => observer && unobserve();
    }
  }, [target]);

  const observe = (element: HTMLElement) => {
    observer.current.observe(element);
    return () => observer.current.unobserve(element);
  };

  return { items, target };
};
