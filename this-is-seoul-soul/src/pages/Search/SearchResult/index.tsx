import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { cls } from 'utils/cls';

interface Props {}

export const SearchResultPage = ({}: Props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  return (
    <div className={cls('bg-white flex h-[6%] px-4 pt-1 gap-5 items-center shadow-md')}>
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoIosArrowBack size={24} className={cls('text-gray-800')} />
      </div>

      <input
        type='text'
        value={keyword}
        onFocus={() => navigate(-1)}
        className={cls('placeholder-gray-500 w-full mr-4 text-base')}
      />
    </div>
  );
};
