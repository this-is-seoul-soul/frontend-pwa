import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

export const GoogleLoginButton = () => {
  // const clientId = process.env.VITE_APP_GOOGLE_CLIENT_ID || '';
  return (
    <>
      <GoogleOAuthProvider
        clientId={'google_client'}
      >
        <GoogleLogin
          onSuccess={(res) => {
            console.log(res);
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};
