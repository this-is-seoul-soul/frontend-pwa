import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { cls } from 'utils/cls';

export const GoogleLoginButton = () => {
  const CLIENT_ID = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;

  const navigation = useAppNavigation();

  const checkClientId = async (clientId: string) => {
    console.log(clientId);
    // TODO: api 연결
    const result = true;
    if (result) {
      //페이지 이동
      navigation.navigateToCheckNickname();
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
