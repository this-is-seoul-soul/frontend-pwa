/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchInputBar } from 'components/atoms/inputs/SearchInputBar';
import { SearchList } from 'components/molecules/searchList/SearchList';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { useEffect, useState } from 'react';
import { Keyword } from 'types/search';

export const SearchPage = () => {
  const [value, setValue] = useState<string>('');
  const [keywords, setKeywords] = useState<Keyword[]>(
    JSON.parse(localStorage.getItem('keywords') || '[]')
  );
  const navigator = useAppNavigation();

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  //검색어 추가
  const handleAddKeyword = () => {
    console.log('text', value);
    const newKeyword = {
      id: Date.now(),
      text: value,
    };
    setKeywords([newKeyword, ...keywords]);
    navigator.navigateToSearchResult(value);
    // TODO: 검색해서 결과 받는 api 연결
  };

  //검색어 삭제
  const handleRemoveKeyword = (id: any) => {
    const nextKeyword = keywords.filter((thisKeyword: any) => {
      return thisKeyword.id != id;
    });
    setKeywords(nextKeyword);
  };

  //검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([]);
  };

  return (
    <div className='w-full h-full bg-yellow-50'>
      <SearchInputBar value={value} setValue={setValue} handleAddKeyword={handleAddKeyword} />
      <SearchList
        value={value}
        keywords={keywords}
        onClearKeywords={handleClearKeywords}
        onRemoveKeyword={handleRemoveKeyword}
      />
    </div>
  );
};
