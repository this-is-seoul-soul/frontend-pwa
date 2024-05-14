import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import { BottomTabNavigation } from './components/organisms/BottomTabNavigation';
import {
  CheckNicknamePage,
  FestiTestLandingPage,
  homePage,
  pathname,
  signInPage,
} from './constants/pathname';
import { useEffect } from 'react';
import { TopHeader } from 'components/molecules/TopHeader';
import { cls } from 'utils/cls';
import { userStatusApi } from 'apis/userApi';

export default function App() {
  const label = (pathname.find((item) => item.path === location.pathname) || {}).label;

  const navigate = useNavigate();

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
        navigate(signInPage.path, { replace: true });
      }
    } else {
      navigate(signInPage.path, { replace: true });
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  };

  useEffect(() => {
    const localAccessToken = localStorage.getItem('accessToken');
    if (localAccessToken) {
      handleUserStatus();
    } else {
      navigate(signInPage.path, { replace: true });
    }
  }, []);

  return (
    <div className={cls('w-full h-full font-PretendardMedium')}>
      <TopHeader label={label!} />
      <Outlet />
      <BottomTabNavigation label={label!} />
    </div>
  );
}
