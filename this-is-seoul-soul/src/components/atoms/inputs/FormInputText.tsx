/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller } from 'react-hook-form';
import { cls } from 'utils/cls';

interface FormInputTextProps {
  name: string;
  control: any;
  placeholder: string;
  rules?: any;
  onChange?: (value: string) => void;
}

export const FormInputText = ({
  name,
  control,
  placeholder,
  rules,
  onChange,
  ...etc
}: FormInputTextProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange && onChange(value);
  };
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <input
          className={cls('w-full bg-gray-100 rounded-2xl py-4 px-4')}
          onChange={(e) => {
            onChange(e);
            handleChange(e);
          }}
          value={value}
          placeholder={placeholder}
          {...etc}
        />
      )}
    />
  );
};
