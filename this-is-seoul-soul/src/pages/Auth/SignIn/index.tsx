import LogoNoBackground from 'assets/images/LogoNoBackground.png';
import { cls } from 'utils/cls';
import { GoogleLoginButton } from 'components/atoms/socialLoginButton/GoogleLoginButton';
import { GoogleOAuthProvider } from '@react-oauth/google';

export const SignIn = () => {
  const CLIENT_ID = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;
  return (
    <div className='w-full h-screen bg-yellow-400 flex justify-center items-center px-4'>
      <div className='w-full'>
        <div className={cls('w-56 mb-14 mx-auto')}>
          <img src={LogoNoBackground} alt='로고' />
        </div>
        <div className={cls('w-full py-4')}>
          <GoogleOAuthProvider clientId={CLIENT_ID}>
            <GoogleLoginButton />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};
