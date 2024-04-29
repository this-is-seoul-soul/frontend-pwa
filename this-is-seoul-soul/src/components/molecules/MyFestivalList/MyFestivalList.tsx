import { useAppNavigation } from 'hooks/useAppNavigation';
import { FaAngleRight } from 'react-icons/fa6';

export const MyFestivalList = () => {
  const navigation = useAppNavigation();

  const handleMoveFestivalRegistration = () => {
    navigation.navigateToFestivalRegister();
  };
  return (
    <div>
      <div className='flex justify-between items-center py-4'>
        <div className='font-bold text-base'>축제</div>
        <div
          className='flex items-center gap-1 text-gray-800 text-xs'
          onClick={handleMoveFestivalRegistration}
        >
          <div>등록하기</div>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};
