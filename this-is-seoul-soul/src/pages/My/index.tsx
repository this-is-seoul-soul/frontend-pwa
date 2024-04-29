import { MyUserInfo } from 'components/atoms/userInfo/MyUserInfo';
import { MyFestivalList } from 'components/molecules/MyFestivalList/MyFestivalList';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { IoSettingsOutline } from 'react-icons/io5';

export const MyPage = () => {
  const navigation = useAppNavigation();

  const handleMoveSettingPage = () => {
    navigation.navigateToSetting();
  };

  return (
    <div className='w-full h-full px-4 '>
      <div className='flex justify-end items-right py-3'>
        <IoSettingsOutline
          size={20}
          className='text-gray-900'
          onClick={() => handleMoveSettingPage()}
        />
      </div>
      <MyUserInfo />
      <MyFestivalList />
    </div>
  );
};
