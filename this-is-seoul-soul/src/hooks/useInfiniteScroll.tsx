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
  const isFirst = useRef(true);

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
    // 처음 mount될 때는 next page를 요청하지 않도록 하여
    // 비동기로 인해 다음 페이지가 먼저 렌더링 되는 현상을 막음
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
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

  return { items, target, setParams };
};
