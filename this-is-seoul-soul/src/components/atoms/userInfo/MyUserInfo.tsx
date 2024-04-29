import { useAppNavigation } from 'hooks/useAppNavigation';
import { useEffect, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { UserInfoType } from 'types/user';
import { cls } from 'utils/cls';

export const MyUserInfo = () => {
  const navigation = useAppNavigation();

  const [userInfo, setUserInfo] = useState<UserInfoType>();

  const handleMoveMyReviewDetails = () => {
    navigation.navigateToMyReviewDetails();
  };

  useEffect(() => {
    const userInfo = {
      profileImg: 'https://cdn.class101.net/images/53a14415-57eb-4d3c-b740-577ba433ad80',
      nickname: '달려라뭐하니',
      festi: 'DATE',
    };
    setUserInfo(userInfo);
  }, []);

  return (
    <div className={cls('w-full grid grid-cols-3 items-center my-4 gap-4')}>
      <div className='border-solid border-2 border-gray-800 w-24 h-24 rounded-full overflow-hidden mx-auto'>
        <img
          src={userInfo?.profileImg}
          className='object-cover w-full h-full'
          alt='프로필 이미지'
        />
      </div>
      <div className='col-span-2'>
        <div className='mb-1'>
          <span className='font-bold text-2xl text-gray-800 mr-1'>{userInfo?.nickname}</span>
          <span className='font-bold text-base text-yellow-500'>{userInfo?.festi}</span>
        </div>
        <div
          className='flex items-center gap-1 0 text-xs text-gray-800'
          onClick={handleMoveMyReviewDetails}
        >
          리뷰 보기
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};
