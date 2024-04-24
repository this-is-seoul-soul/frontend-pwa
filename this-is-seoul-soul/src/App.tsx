import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import { BottomTabNavigation } from './components/organisms/BottomTabNavigation';
import { pathname, signInPage } from './constants/pathname';
import { useEffect } from 'react';

export type LoginStatusType = 'init' | 'nickname' | 'festi' | 'complete';

export default function App() {
  // const [status, setStatus] = useState<LoginStatusType>();
  const label = (pathname.find((item) => item.path === location.pathname) || {}).label;

  const navigate = useNavigate();

  useEffect(() => {
    const isInitialRoute = localStorage.getItem('isInitialRoute');
    if (isInitialRoute !== 'F') {
      navigate(signInPage.path, { replace: true });
    }
  }, [navigate]);

  return (
    <div className='w-full h-full'>
      <div>
        <Outlet />
        <BottomTabNavigation label={label!} />
      </div>
    </div>
  );
}
