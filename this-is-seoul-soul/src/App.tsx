import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import { BottomTabNavigation } from './components/organisms/BottomTabNavigation';
import { homePage, pathname, signInPage } from './constants/pathname';
import { useEffect } from 'react';
import { TopHeader } from 'components/molecules/TopHeader';
import { cls } from 'utils/cls';

export default function App() {
  const label = (pathname.find((item) => item.path === location.pathname) || {}).label;

  const navigate = useNavigate();

  useEffect(() => {
    // localStorageaccesstoken이 있는지..
    const localAccessToken = localStorage.getItem('accessToken');
    console.log(localAccessToken);
    if (localAccessToken !== null) {
      navigate(homePage.path, { replace: true });
    } else {
      navigate(signInPage.path, { replace: true });
    }
    // accesstoken이 만료되었는지
    // 만료된 상태가 아니라면 -> 어디까지 회원가입한 상태인지 파악하고 페이지 이동
    // 없다면 signInPage로 이동
  }, [navigate]);

  return (
    <div className={cls('w-full h-full')}>
      <TopHeader label={label!} />
      <Outlet />
      <BottomTabNavigation label={label!} />
    </div>
  );
}
