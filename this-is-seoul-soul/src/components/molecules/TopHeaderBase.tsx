import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { cls } from 'utils/cls';

interface BaseTopHeaderProps {
  back?: boolean;
  title?: string;
}

export const TopHeaderBase = ({ back = false, title }: BaseTopHeaderProps) => {
  const navigate = useNavigate();
  console.log(title);

  return (
    <div className={cls('relative z-20', `${title !== '축제 등록' && 'h-[47px]'}`)}>
      <div className='fixed max-w-[500px] left-0 right-0 mx-auto grid grid-cols-3 px-2 py-3 bg-white'>
        <div className='justify-self-start'>
          {back ? (
            <div
              onClick={() => {
                navigate(-1);
              }}
            >
              <IoIosArrowBack size={24} className='text-gray-800' />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className='justify-self-center font-bold text-gray-900'>{title}</div>
        <div className='justify-self-end'></div>
      </div>
    </div>
  );
};
