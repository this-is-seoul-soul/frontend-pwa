/* eslint-disable @typescript-eslint/no-explicit-any */
import { codeNameColor } from 'constants/codename';
import useBottomSheet from 'hooks/useBottomSheet';
import { useState } from 'react';
import { cls } from 'utils/cls';

interface CategorizeFestivalInputTextProps {
  name: string;
  control?: any;
  placeholder: string;
}

export const CategorizeFestivalInputText = ({
  name,
  placeholder,
}: CategorizeFestivalInputTextProps) => {
  const { component, openPopup, closePopup } = useBottomSheet();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e: { target: { value: any } }) => {
    setSelectedOption(e.target.value);
    closePopup();
  };

  const radioButtons = Object.keys(codeNameColor).map((key) => (
    <div key={key}>
      <input
        type='radio'
        id={key}
        name='option'
        value={key}
        defaultChecked={selectedOption === key}
        onChange={handleOptionChange}
      />
      <label htmlFor={key} style={{ fontWeight: selectedOption === key ? 'bold' : 'normal' }}>
        {key}
      </label>
    </div>
  ));

  const handleOpenModal = () => {
    const modalContent = (
      <div className={cls('overflow-y-auto mx-4 font-PretendardMedium')}>
        <div>{radioButtons}</div>
        <div>저장</div>
      </div>
    );
    const modalTitle = (
      <div className='w-full py-2 flex justify-center items-center'>모달 제목</div>
    );
    openPopup(modalContent, modalTitle);
  };
  return (
    <div>
      <div className='relative'>
        <input
          onClick={handleOpenModal}
          name={name}
          className={cls('w-full mt-2 mb-3 border-[1.5px] border-gray-500 rounded-2xl py-3 px-4')}
          value={selectedOption || ''}
          placeholder={placeholder}
          disabled={false}
          readOnly // 사용자가 직접 수정하지 못하도록 설정
        />
      </div>
      <div className={cls('z-10')}>{component}</div>
    </div>
  );
};
