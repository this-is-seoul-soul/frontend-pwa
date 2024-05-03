/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from 'react-hook-form';
import { cls } from 'utils/cls';

interface RegisterFormInputTextProps {
  name: string;
  label: string;
  placeholder: string;
  control: any;
  setLocation?: React.Dispatch<React.SetStateAction<boolean>>;
  disabled?: boolean;
  defaultValue?: string;
}

export const RegisterFormInputText = ({
  name,
  placeholder,
  label,
  control,
  setLocation,
  disabled,
  defaultValue,
}: RegisterFormInputTextProps) => {
  const handleEditPlace = () => {
    setLocation && setLocation(false);
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <div className='flex flex-col relative'>
          <label>{label}</label>
          <div className='relative'>
            <input
              className={cls(
                'w-full mt-2 mb-3 border-[1.5px] border-gray-500 rounded-2xl py-3 px-4'
              )}
              onChange={onChange}
              value={value}
              placeholder={placeholder}
              maxLength={name === 'title' ? 100 : undefined}
              disabled={disabled}
            />
            {name === 'place' && (
              <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                <div className='text-yellow-400 font-bold px-4' onClick={handleEditPlace}>
                  수정
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    ></Controller>
  );
};
