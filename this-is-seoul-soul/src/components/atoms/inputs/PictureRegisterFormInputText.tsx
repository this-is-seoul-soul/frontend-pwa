/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from 'react';
import { MdAddAPhoto } from 'react-icons/md';
import { cls } from 'utils/cls';

interface PictureRegisterFormInputTextProps {
  name: string;
  setValue: any;
  label: string;
}
export const PictureRegisterFormInputText = ({
  name,
  setValue,
  label,
}: PictureRegisterFormInputTextProps) => {
  const [imgUrl, setImgUrl] = useState<string>('');

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setImgUrl(URL.createObjectURL(file));
      setValue(name, file.name);
    }
  };
  return (
    <div className=''>
      <div className='my-3'>
        <label>{label}</label>
      </div>
      <section className={cls('flex')}>
        <div
          className={cls(
            'w-[100px] min-w-[100px] h-[100px] flex justify-center items-center mr-1 bg-white border border-yellow-400 rounded-lg'
          )}
        >
          <label htmlFor={name}>
            <MdAddAPhoto size={36} className={cls('text-yellow-400 mr-[4px]')} />
          </label>
          <input
            id={name}
            type='file'
            accept='image/*'
            onChange={handleImageUpload}
            className='hidden'
          />
        </div>
        <div className={cls('flex flex-row-reverse gap-1')}>
          {imgUrl && (
            <img
              className={cls(
                'w-[100px] h-[100px] object-cover border-2 border-gray-200 rounded-lg'
              )}
              src={imgUrl}
              alt='img'
            />
          )}
        </div>
      </section>
    </div>
  );
};
