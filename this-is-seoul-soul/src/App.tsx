import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import { BottomTabNavigation } from './components/organisms/BottomTabNavigation';
import { pathname, signInPage } from './constants/pathname';
import { useEffect } from 'react';
import { TopHeader } from 'components/molecules/TopHeader';
import { cls } from 'utils/cls';

export default function App() {
  const label = (pathname.find((item) => item.path === location.pathname) || {}).label;

  const navigate = useNavigate();

  useEffect(() => {
    const isInitialRoute = localStorage.getItem('isInitialRoute');
    console.log(isInitialRoute);
    if (isInitialRoute !== 'F') {
      localStorage.setItem('isInitialRoute', 'F');
      navigate(signInPage.path, { replace: true });
    }
  }, [navigate]);

  return (
    <div className={cls('w-full h-full')}>
      <TopHeader label={label!} />
      <Outlet />
      <BottomTabNavigation label={label!} />
    </div>
  );
}
