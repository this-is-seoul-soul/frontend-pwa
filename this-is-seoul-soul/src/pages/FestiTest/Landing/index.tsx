import LogoCharacter from 'assets/images/LogoCharacter.png';
import { BottomButton } from 'components/atoms/buttons/BottomButton';
import { cls } from 'utils/cls';

export const Landing = () => {
  return (
    <div className={cls('w-full h-screen bg-yellow-50 px-4')}>
      <div
        className={cls('w-[510px] h-[510px] bg-white rounded-full absolute -top-20 -left-20 z-0')}
      />
      <div className={cls('relative z-1')}>
        <div className={cls('pt-36 pl-8 pb-8')}>
          <div className={cls('text-lg')}>서울의 모든 축제 정보를 볼 수 있는 곳</div>
          <div className={cls('pb-2')}>
            <span className={cls('font-bold text-3xl')}>S2</span>
            <span className={cls('font-bold text-2xl')}> 에 오신 것을</span>
          </div>
          <div className={cls('font-bold text-5xl')}>환영합니다!</div>
        </div>
        <div className={cls('w-44 mr-7 mx-auto')}>
          <img src={LogoCharacter} alt="캐릭터" />
        </div>
      </div>

      <div className={cls('mt-20 pt-10 flex flex-col items-center')}>
        <div className={cls('text-lg')}>S2만의 간단한 축제 취향 검사,</div>
        <div className={cls('my-2')}>
          <span className={cls('font-bold text-3xl')}>FESTI</span>
          <span className={cls('text-2xl')}> 를 시작해볼까요?</span>
        </div>
      </div>

      <BottomButton title="시작하기" type="button" />
    </div>
  );
};
