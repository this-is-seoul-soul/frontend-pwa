import './App.css';
import { SignIn } from './pages/Auth/SignIn';

export type LoginStatusType = 'init' | 'nickname' | 'festi' | 'complete';

export default function App() {
  // const [status, setStatus] = useState<LoginStatusType>();

  return (
    <div className='w-full h-full'>
      <SignIn />
    </div>
  );
}
