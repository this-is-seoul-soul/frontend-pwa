// import { useGoogleLogin } from '@react-oauth/google';
// import { userStatusApi } from 'apis/userApi';
// import { CheckNicknamePage, FestiTestLandingPage, homePage } from 'constants/pathname';
// import { useNavigate } from 'react-router-dom';
import GoogleLogo from 'assets/images/GoogleLogo.png';

export type LoginStatusType = 'init' | 'nickname' | 'festi' | 'complete';

export const GoogleLoginButton = () => {
  const GOOGLE_CLIENT_ID = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;
  const GOOGLE_REDIRECT_URL = import.meta.env.VITE_APP_GOOGLE_REDIRECT_URL;

  const link = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URL}&response_type=code&scope=openid email profile`;

  const loginHandler = () => {
    window.location.href = link;
  };

  // const navigate = useNavigate();

  // const handleAuthStatus = async () => {
  //   const res = await userStatusApi();

  //   if (res.data.data.status === 'complete') {
  //     navigate(homePage.path, { replace: true });
  //   } else if (res.data.data.status === 'festi') {
  //     navigate(FestiTestLandingPage.path, { replace: true });
  //   } else if (res.data.data.status === 'nickname') {
  //     navigate(CheckNicknamePage.path, { replace: true });
  //   } else {
  //     navigate(CheckNicknamePage.path, { replace: true });
  //   }
  // };

  return (
    <div>
      <button
        className='flex items-center w-full h-10 bg-white rounded-md shadow-md cursor-pointer'
        onClick={loginHandler}
      >
        <img src={GoogleLogo} alt='Google Logo' className='w-6 h-6 ml-3' />
        <div className='mx-auto text-xs font-bold text-gray-600'>Google 로그인</div>
      </button>
    </div>
  );
};
