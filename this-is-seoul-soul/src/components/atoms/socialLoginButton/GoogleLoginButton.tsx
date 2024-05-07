import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { signInGoogleApi, userStatusApi } from 'apis/userApi';
import { CheckNicknamePage, FestiTestLandingPage, homePage } from 'constants/pathname';
import { useNavigate } from 'react-router-dom';
import { cls } from 'utils/cls';

export type LoginStatusType = 'init' | 'nickname' | 'festi' | 'complete';

export const GoogleLoginButton = () => {
  const CLIENT_ID = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;

  const navigate = useNavigate();

  const handleAuthStatus = async (googleId: string) => {
    const res = await userStatusApi(googleId);
    console.log('이거', res.data.data.status);

    if (res.data.data.status === 'complete') {
      navigate(homePage.path, { replace: true });
    } else if (res.data.data.status === 'festi') {
      navigate(FestiTestLandingPage.path, { replace: true });
    } else if (res.data.data.status === 'nickname') {
      navigate(CheckNicknamePage.path, { replace: true });
    }
  };

  const checkClientId = async (clientId: string) => {
    const result = await signInGoogleApi(clientId);
    console.log(result);
    if (result.status === 200) {
      localStorage.setItem('accessToken', result.data.data.accessToken);
      handleAuthStatus(clientId);
    } else if (result.status === 403) {
      console.log('로그인 시 에러 발생했습니다.');
    }
  };

  return (
    <div className={cls('w-full flex justify-center items-center')}>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <GoogleLogin
          onSuccess={(res) => {
            if (res.clientId) checkClientId(res.clientId);
          }}
          onError={() => {
            console.log('login 실패');
          }}
          useOneTap={true}
          width='350px'
        />
      </GoogleOAuthProvider>
    </div>
  );
};
