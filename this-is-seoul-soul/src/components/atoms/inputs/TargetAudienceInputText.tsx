import useBottomSheet from 'hooks/useBottomSheet';
import { ChangeEvent, useState } from 'react';
import { Controller } from 'react-hook-form';
import { cls } from 'utils/cls';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface TargetAudienceInputTextProps {
  name: string;
  control: any;
  placeholder: string;
  setValue: any;
  getValues: any;
  label: string;
}

export const TargetAudienceInputText = ({
  name,
  control,
  placeholder,
  setValue,
  label,
  getValues,
}: TargetAudienceInputTextProps) => {
  const { component, openPopup, closePopup } = useBottomSheet();
  const [rangeVal, setRangeVal] = useState('');

  const userRangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setRangeVal(value);
    if (value === '0') {
      setValue(name, `전체 이용`);
    } else {
      setValue(name, `${value}세 이상 이용가능`);
    }
  };

  const handleCloseModal = () => {
    closePopup();
  };

  const handleOpenModal = () => {
    const modalContent = (
      <div className='w-full'>
        <div className='flex flex-col items-center w-full mb-10 mt-5'>
          <div className='mb-5 font-PretendardBold text-yellow-500 text-2xl'>
            {getValues(name) ? getValues(name) : '이용 대상 연령을 선택해주세요.'}
          </div>
          <div className='w-full px-4 items-center'>
            <input
              id='sort_range_input'
              type={'range'}
              min='0'
              max={'40'}
              step={'1'}
              defaultValue={rangeVal}
              onChange={userRangeInput}
              className='w-full accent-yellow-400'
            ></input>
          </div>
        </div>
        <div className='w-full'>
          <div className='border-t-[1px] border-gray-400 my-1 w-full'></div>
          <div
            className='w-full py-3 flex justify-center items-center font-PretendardMedium'
            onClick={handleCloseModal}
          >
            <div>닫기</div>
          </div>
        </div>
      </div>
    );

    const modalTitle = (
      <div className='w-full py-2 flex justify-center items-center font-PretendardMedium'>
        {label}
      </div>
    );
    openPopup(modalContent, modalTitle);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div>
          <label>{label}</label>
          <div className='relative'>
            <input
              onClick={handleOpenModal}
              name={name}
              className={cls(
                'w-full mt-2 mb-3 border-[1.5px] border-gray-500 rounded-2xl py-3 px-4'
              )}
              value={value}
              placeholder={placeholder}
              disabled={false}
              onChange={onChange}
              readOnly
            />
          </div>
          <div className={cls('z-10')}>{component}</div>
        </div>
      )}
    />
  );
};
