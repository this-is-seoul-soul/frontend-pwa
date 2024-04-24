/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from 'react-hook-form';
import { cls } from 'utils/cls';

interface FormInputTextProps {
  name: string;
  control: any;
  placeholder: string;
  rules?: any;
}

export const FormInputText = ({
  name,
  control,
  placeholder,
  rules,
  ...etc
}: FormInputTextProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <input
          className={cls('w-full bg-gray-100 rounded-2xl py-4 px-4')}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          {...etc}
        />
      )}
    />
  );
};
