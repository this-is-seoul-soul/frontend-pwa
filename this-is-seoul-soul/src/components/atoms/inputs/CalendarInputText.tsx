/* eslint-disable @typescript-eslint/no-explicit-any */
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import CalendarComponent from '../calendars/Calendar';
import useBottomSheet from 'hooks/useBottomSheet';
import { Controller } from 'react-hook-form';
import { cls } from 'utils/cls';

interface CalendarInputTextProps {
  nameFirst: string;
  nameSecond: string;
  label: string;
  placeholderFirst: string;
  placeholdSecond: string;
  control?: any;
  setValue: any;
}

export const CalendarInputText = ({
  nameFirst,
  nameSecond,
  label,
  placeholderFirst,
  placeholdSecond,
  control,
  setValue,
}: CalendarInputTextProps) => {
  const { component, openPopup, closePopup } = useBottomSheet();
  const handleCloseModal = () => {
    closePopup();
  };

  const handleOpenModal = () => {
    const modalContent = (
      <div>
        <div className={cls('overflow-y-auto mx-4 font-PretendardMedium pb-10')}>
          <CalendarComponent setValue={setValue} />
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
      </div>
    );
    const modalTitle = <div className='w-full py-2 flex justify-center items-center'>{label}</div>;
    openPopup(modalContent, modalTitle);
  };

  return (
    <div>
      <label>{label}</label>
      <div className='flex justify-center items-center'>
        <Controller
          name={nameFirst}
          control={control}
          render={({ field: { onChange, value } }) => (
            <div>
              <div className='relative'>
                <input
                  onClick={handleOpenModal}
                  name={nameFirst}
                  className={cls(
                    'w-full mt-2 mb-3 border-[1.5px] border-gray-500 rounded-2xl py-3 px-4'
                  )}
                  value={value}
                  placeholder={placeholderFirst}
                  disabled={false}
                  onChange={onChange}
                  readOnly
                />
              </div>
            </div>
          )}
        />
        <div className='px-4'>~</div>
        <Controller
          name={nameSecond}
          control={control}
          render={({ field: { onChange, value } }) => (
            <div>
              <div className='relative'>
                <input
                  onClick={handleOpenModal}
                  name={nameSecond}
                  className={cls(
                    'w-full mt-2 mb-3 border-[1.5px] border-gray-500 rounded-2xl py-3 px-4'
                  )}
                  value={value}
                  placeholder={placeholdSecond}
                  disabled={false}
                  onChange={onChange}
                  readOnly
                />
              </div>
            </div>
          )}
        />
      </div>
      <div className={cls('z-10')}>{component}</div>
    </div>
  );
};
