import { Outlet } from "react-router-dom";
import './App.css';
import { SignIn } from './pages/Auth/SignIn';
import { BottomTabNavigation } from "./components/organisms/BottomTabNavigation";
import { homePage } from "./constants/pathname";

export type LoginStatusType = 'init' | 'nickname' | 'festi' | 'complete';

export default function App() {
  // const [status, setStatus] = useState<LoginStatusType>();

  return (
    <div className='w-full h-full'>
      <SignIn />
      <div>
        <Outlet/>
        <BottomTabNavigation label={homePage.label} />
      </div>
    </div>
  );
}
