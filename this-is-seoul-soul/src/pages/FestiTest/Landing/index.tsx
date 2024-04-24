import { BottomButton } from 'components/atoms/buttons/BottomButton';
import { cls } from 'utils/cls';

export const Landing = () => {
  return (
    <div className={cls('w-full h-screen bg-yellow-50 px-4')}>
      <div>서울의 어쩌구</div>
      <BottomButton title='시작하기' type='button' />
    </div>
  );
};
