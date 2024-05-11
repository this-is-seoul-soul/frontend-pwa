import useBottomSheet from 'hooks/useBottomSheet';
import { useState } from 'react';
import { BiSortAlt2 } from 'react-icons/bi';
import { cls } from 'utils/cls';

interface SortInputTextProps {
  sortList: { [key: string]: number };
  setValue: (sort: number) => void;
}

export const SortInputText = ({ sortList, setValue }: SortInputTextProps) => {
  const { component, openPopup, closePopup } = useBottomSheet();
  const [selectedOption, setSelectedOption] = useState(Object.keys(sortList)[0]);

  const handleSortClick = (key: string, sortId: number) => {
    setValue(sortId);
    setSelectedOption(key);
    closePopup();
  };

  const sortButtons = Object.keys(sortList).map((key) => {
    const sortId = sortList[key];
    return (
      <div key={key} className='py-2' onClick={() => handleSortClick(key, sortId)}>
        {key}
      </div>
    );
  });

  const handleOpenModal = () => {
    const modalContent = (
      <div>
        <div className={cls('flex flex-col mx-4 font-PretendardMedium pb-10')}>{sortButtons}</div>
      </div>
    );
    const modalTitle = <div className='w-full py-2 flex justify-center items-center'>정렬</div>;
    openPopup(modalContent, modalTitle);
  };

  return (
    <div>
      <div onClick={handleOpenModal} className={cls('flex items-center')}>
        {selectedOption} <BiSortAlt2 className={cls('mt-1 pl-1')} size={20} />
      </div>
      <div className={cls('z-10')}>{component}</div>
    </div>
  );
};
