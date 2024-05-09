interface SearchItemProps {
  keyword: string;
}

export const SearchItem = ({ keyword }: SearchItemProps) => {
  return <div>검색어 '{keyword}' api 요청 결과...</div>;
};
