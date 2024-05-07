import { userLogoutApi, userQuitApi } from 'apis/userApi';
import Modal from 'components/atoms/modals/Modal';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { useState } from 'react';

export const SettingPage = () => {
  const navigation = useAppNavigation();
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);

  const defaultSettingMenu = [
    {
      label: 'festi 검사',
      onClick: () => {
        navigation.navigateToFestiTestLanding();
      },
    },
    {
      label: '개인정보처리방침',
      onClick: () => {
        navigation.navigateToPrivatePolicy();
      },
    },
  ];

  const handleLogout = async () => {
    const result = await userLogoutApi();
    if (result.status === 200) {
      localStorage.clear();
      navigation.navigateToSignIn();
    }
  };

  const handleWithdraw = () => {
    setShowWithdrawModal(true);
  };

  const confirmWithdrawal = async () => {
    const result = await userQuitApi();
    if (result.status === 200) {
      localStorage.clear();
      navigation.navigateToSignIn();
    }
  };

  return (
    <div className='w-full'>
      <div className=''>
        {defaultSettingMenu.map((menu, i) => (
          <div key={i}>
            <div className='mx-4 my-2' onClick={menu.onClick}>
              {menu.label}
            </div>
            <div className='border-t-2 border-gray-200'></div>
          </div>
        ))}
      </div>

      <div className='flex justify-center absolute bottom-16 w-full text-gray-600'>
        <span className='mx-2' onClick={handleLogout}>
          로그아웃
        </span>
        <span className='mx-2' onClick={handleWithdraw}>
          탈퇴하기
        </span>
      </div>
      {showWithdrawModal && (
        <Modal useModal={showWithdrawModal} setIsModalOpen={setShowWithdrawModal}>
          <div className='p-4'>
            <p>정말로 탈퇴하시겠습니까?</p>
            <div className='flex justify-center mt-4'>
              <button
                className='bg-gray-300 rounded-lg text-white px-4 py-2 mr-4'
                onClick={() => setShowWithdrawModal(false)}
              >
                취소
              </button>
              <button
                className='bg-yellow-400 rounded-lg text-black px-4 py-2'
                onClick={confirmWithdrawal}
              >
                탈퇴하기
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
