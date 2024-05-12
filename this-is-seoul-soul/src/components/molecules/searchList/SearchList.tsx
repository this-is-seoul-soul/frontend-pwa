/* eslint-disable @typescript-eslint/no-unused-vars */

import { FestInfoMapItem } from 'components/atoms/festInfo/FestInfoMapItem';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { CiCircleAlert } from 'react-icons/ci';
import { GoSearch } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import { FestType } from 'types/fest';
import { Keyword } from 'types/search';

/* eslint-disable @typescript-eslint/no-explicit-any */
type SearchListProps = {
  value: string;
  keywords: Keyword[];
  searchList: FestType[];
  onClearKeywords: () => void;
  onRemoveKeyword: (id: any) => void;
};

export const SearchList = ({
  value,
  onClearKeywords,
  keywords,
  searchList,
  onRemoveKeyword,
}: SearchListProps) => {
  const navigator = useAppNavigation();

  return (
    <div className='w-full h-[93.3%] mt-[1%] bg-white'>
      {value.length === 0 ? (
        <div className='w-full h-full px-4'>
          <div className='flex items-center justify-between'>
            <div className='font-bold py-2 content-start'>최근 검색어</div>
            <div className='content-end text-xs' onClick={onClearKeywords}>
              전체 삭제
            </div>
          </div>
          <div className='w-full h-[93.3%]'>
            {keywords.length === 0 ? (
              <div className='w-full h-full flex flex-col justify-center items-center'>
                <div>
                  <CiCircleAlert size={40} className='mb-3' />
                </div>
                <div className='text-sm'>최근 검색한 기록이 없습니다.</div>
              </div>
            ) : (
              keywords.map((Keyword) => {
                return (
                  <div key={Keyword.id} className='flex items-center justify-between py-2'>
                    <div className='flex gap-4'>
                      <GoSearch size={20} className='text-gray-400 stroke-1 ' />
                      <div
                        className=''
                        onClick={() => navigator.navigateToSearchResult(Keyword.text)}
                      >
                        {Keyword.text}
                      </div>
                    </div>
                    <div onClick={() => onRemoveKeyword(Keyword.id)} className='justify-self-end'>
                      <IoClose />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      ) : (
        <div>
          {searchList.map((searchItem) => {
            return (
              <div>
                <FestInfoMapItem fest={searchItem} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
