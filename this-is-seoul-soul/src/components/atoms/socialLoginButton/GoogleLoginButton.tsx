import { useGoogleLogin } from '@react-oauth/google';
import { signInGoogleApi, userStatusApi } from 'apis/userApi';
import { CheckNicknamePage, FestiTestLandingPage, homePage } from 'constants/pathname';
import { useNavigate } from 'react-router-dom';
import GoogleLogo from 'assets/images/GoogleLogo.png';

export type LoginStatusType = 'init' | 'nickname' | 'festi' | 'complete';

export const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleAuthStatus = async (googleId: string) => {
    const res = await userStatusApi(googleId);

    if (res.data.data.status === 'complete') {
      navigate(homePage.path, { replace: true });
    } else if (res.data.data.status === 'festi') {
      navigate(FestiTestLandingPage.path, { replace: true });
    } else if (res.data.data.status === 'nickname') {
      navigate(CheckNicknamePage.path, { replace: true });
    } else {
      navigate(CheckNicknamePage.path, { replace: true });
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (googleData) => {
      console.log(googleData);
      const result = await signInGoogleApi(googleData.code);
      console.log(result);
      if (result.status === 200) {
        localStorage.setItem('accessToken', result.data.data.accessToken);
        localStorage.setItem('refreshToken', result.data.data.refreshToken);
        handleAuthStatus(googleData.code);
      } else if (result.status === 403) {
        console.log('로그인 시 에러 발생했습니다.');
      }
    },
    flow: 'auth-code',
  });

  return (
    <div>
      <button
        className='flex items-center w-full h-10 bg-white rounded-md shadow-md cursor-pointer'
        onClick={() => handleGoogleLogin()}
      >
        <img src={GoogleLogo} alt='Google Logo' className='w-6 h-6 ml-3' />
        <div className='mx-auto text-xs font-bold text-gray-600'>Google 로그인</div>
      </button>
    </div>
  );
};
