import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

type SearchInputBarProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleAddKeyword: () => void;
};
export const SearchInputBar = ({ value, setValue, handleAddKeyword }: SearchInputBarProps) => {
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 폼 제출 기본 동작 막기
    handleAddKeyword(); // 입력값을 추가하는 함수 호출
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white flex h-[6%] px-4 pt-1 gap-5 items-center'>
      <div
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoIosArrowBack size={24} className='text-gray-800' />
      </div>

      <input
        type='text'
        placeholder='어떤 축제를 찾으시나요?'
        value={value}
        onChange={handleChange}
        className=' placeholder-gray-500 w-full mr-4 text-base'
      />
    </form>
  );
};
