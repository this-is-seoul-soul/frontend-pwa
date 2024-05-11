import { priceList } from 'constants/price';
import useBottomSheet from 'hooks/useBottomSheet';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { cls } from 'utils/cls';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface PriceInputTextProps {
  name: string;
  control?: any;
  placeholder: string;
  setValue: any;
  label: string;
}

export const PriceInputText = ({
  name,
  control,
  placeholder,
  setValue,
  label,
}: PriceInputTextProps) => {
  const { component, openPopup, closePopup } = useBottomSheet();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e: { target: { value: any } }) => {
    setSelectedOption(e.target.value);
    setValue(name, e.target.value);
    closePopup();
  };

  const radioButtons = priceList.map((item) => (
    <div key={item.priceId} className='py-2'>
      <input
        type='radio'
        id={String(item.priceId)}
        name='option'
        value={item.label}
        defaultChecked={selectedOption === item.label}
        onChange={handleOptionChange}
        className='accent-yellow-400 text-white'
      />
      <label
        htmlFor={String(item.priceId)}
        className={`${
          selectedOption === item.label ? 'font-bold' : 'font-normal text-gray-700'
        } font-PretendardMedium px-3`}
      >
        {item.label}
      </label>
    </div>
  ));

  const handleOpenModal = () => {
    const modalContent = (
      <div>
        <div className={cls('overflow-y-auto mx-4 font-PretendardMedium pb-10')}>
          <div>{radioButtons}</div>
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
