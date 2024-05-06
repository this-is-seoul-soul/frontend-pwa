import { useAtomValue } from 'jotai';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { headerTitleAtom } from 'stores/headerStore';
import { cls } from 'utils/cls';

interface BaseTopHeaderProps {
  back?: boolean;
  title?: string;
}

export const TopHeaderBase = ({ back = false, title = '' }: BaseTopHeaderProps) => {
  const headerTitle = useAtomValue(headerTitleAtom);
  const navigate = useNavigate();

  return (
    <div
      className={cls(
        'relative z-20',
        `${['축제 등록', '축제 상세'].includes(title) ? '' : 'h-[47px]'}`
      )}
    >
      <div
        className={cls(
          'fixed max-w-[500px] left-0 right-0 mx-auto grid grid-cols-3 px-2 py-3 bg-white'
        )}
      >
        <div className={cls('justify-self-start')}>
          {back ? (
            <div
              onClick={() => {
                navigate(-1);
              }}
            >
              <IoIosArrowBack size={24} className={cls('text-gray-800')} />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={cls('justify-self-center font-bold text-gray-900')}>
          {['축제 상세', '리뷰 등록'].includes(title) ? headerTitle : title}
        </div>
        <div className={cls('justify-self-end')}></div>
      </div>
    </div>
  );
};
