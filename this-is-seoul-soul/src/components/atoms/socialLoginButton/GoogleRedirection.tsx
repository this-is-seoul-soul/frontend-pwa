/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Spinner from '../Spinner';
import { userStatusApi } from 'apis/userApi';
import { CheckNicknamePage, FestiTestLandingPage, homePage, signInPage } from 'constants/pathname';

export default function GoogleRedirection() {
  const code = new URL(document.location.toString()).searchParams.get('code');
  const navigate = useNavigate();
  const googlebackURL = `${import.meta.env.VITE_APP_API}/api/member/login/google`;
  const [isLoading, setIsLoading] = useState(true);

  const handleUserStatus = async () => {
    const res = await userStatusApi();
    console.log(res);
    if (res.status === 200) {
      if (res.data.data.status === 'complete') {
        navigate(homePage.path, { replace: true });
      } else if (res.data.data.status === 'festi') {
        navigate(FestiTestLandingPage.path, { replace: true });
      } else if (res.data.data.status === 'nickname') {
        navigate(CheckNicknamePage.path, { replace: true });
      } else {
        navigate(CheckNicknamePage.path, { replace: true });
      }
    } else if (res.status === 403) {
      navigate(signInPage.path, { replace: true });
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  };

  useEffect(() => {
    console.log('useEffect 실행됨');

    if (code) {
      axios
        .get(googlebackURL, {
          params: {
            googleId: code,
          },
        })
        .then(
          (result) => {
            console.log(result.data);
            const { accessToken, refreshToken } = result.data.data;

            console.log(`refreshToken확인: ${refreshToken}`);
            console.log(`accesstoken확인: ${accessToken}`);

            if (refreshToken) {
              localStorage.setItem('refreshToken', refreshToken);
            }

            if (accessToken) {
              localStorage.setItem('accessToken', accessToken);
            }
            handleUserStatus();
            // navigate('/auth/signin');
          },
          (error) => {
            console.error('구글 로그인 실패:', error);
            navigate('/auth/signin');
          }
        )
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return null;
}
