/* eslint-disable @typescript-eslint/no-explicit-any */
import { festivalInquireApi } from 'apis/festApi';
import { SearchInputBar } from 'components/atoms/inputs/SearchInputBar';
import { SearchList } from 'components/molecules/searchList/SearchList';
// import { useAppNavigation } from 'hooks/useAppNavigation';
import { useEffect, useState } from 'react';
import { FestType } from 'types/fest';
import { Keyword } from 'types/search';
import { debounce } from 'utils/debounce';

export const SearchPage = () => {
  const [value, setValue] = useState<string>('');
  const [keywords, setKeywords] = useState<Keyword[]>(
    JSON.parse(localStorage.getItem('keywords') || '[]')
  );
  const [searchList, setSearchList] = useState<FestType[]>([]);
  // const navigator = useAppNavigation();

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  useEffect(() => {
    debounceHandleSearchKeyword(value);
  }, [value]);

  //검색어 추가
  const handleAddKeyword = () => {
    console.log('text', value);
    const newKeyword = {
      id: Date.now(),
      text: value,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  const debounceHandleSearchKeyword = debounce(async (keyword: string) => {
    console.log('keyword', keyword);
    const res = await festivalInquireApi({ lat: -1, lot: -1, keyword: keyword });
    if (res.status === 200) {
      setSearchList(res.data.data);
    }
  }, 300);

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
        setValue={setValue}
        keywords={keywords}
        onClearKeywords={handleClearKeywords}
        onRemoveKeyword={handleRemoveKeyword}
        searchList={searchList}
      />
    </div>
  );
};
