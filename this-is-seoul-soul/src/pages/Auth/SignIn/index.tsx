import LogoNoBackground from 'assets/images/LogoNoBackground.png';
import { cls } from 'utils/cls';
import { GoogleLoginButton } from 'components/atoms/socialLoginButton/GoogleLoginButton';

export const SignIn = () => {
  return (
    <div className='w-full h-screen bg-yellow-400 flex justify-center items-center px-4'>
      <div className='w-full'>
        <div className={cls('w-56 mb-14 mx-auto')}>
          <img src={LogoNoBackground} alt='로고' />
        </div>
        <div className={cls('w-full py-4')}>
          <GoogleLoginButton />
        </div>
      </div>
    </div>
  );
};
