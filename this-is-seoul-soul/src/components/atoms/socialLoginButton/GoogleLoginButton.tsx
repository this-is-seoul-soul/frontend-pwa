import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { signInGoogleApi, userStatusApi } from 'apis/userApi';
import { homePage } from 'constants/pathname';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cls } from 'utils/cls';

export type LoginStatusType = 'init' | 'nickname' | 'festi' | 'complete';

export const GoogleLoginButton = () => {
  const CLIENT_ID = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;

  const navigation = useAppNavigation();
  const navigate = useNavigate();
  const [status, setStatus] = useState<LoginStatusType>();

  const handleAuthStatus = async (googleId: string) => {
    console.log('여긴 들어오나?');
    const res = await userStatusApi(googleId);
    console.log('이거', res);
    setStatus('festi');
  };

  const checkClientId = async (clientId: string) => {
    const result = await signInGoogleApi(clientId);
    if (result.status === 200) {
      localStorage.setItem('accessToken', result.data.data.accessToken);
      handleAuthStatus(clientId);
      navigation.navigateToCheckNickname();
    }
  };

  useEffect(() => {
    console.log(status);
    if (status === 'complete') {
      navigate(homePage.path, { replace: true });
    }
  }, [status]);

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
