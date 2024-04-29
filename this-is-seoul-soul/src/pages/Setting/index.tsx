export const SettingPage = () => {
  const handleLogout = () => {
    console.log('logout');
    // TODO: logout 부분 기능 구현
  };

  const handleWithdraw = () => {
    console.log('탈퇴');
    // TODO: 탈퇴하기 기능 구현
  };

  return (
    <div className='w-full'>
      <div className=''>
        <div className='mx-4 my-2'>festi 검사</div>
        <div className='border-t-2 border-gray-200'></div>
      </div>

      <div className='flex justify-center absolute bottom-16 w-full text-gray-600'>
        <span className='mx-2' onClick={handleLogout}>
          로그아웃
        </span>
        <span className='mx-2' onClick={handleWithdraw}>
          탈퇴하기
        </span>
      </div>
    </div>
  );
};
