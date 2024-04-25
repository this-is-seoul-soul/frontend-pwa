import LogoCharacter from 'assets/images/LogoCharacter.png';
import { BottomButton } from 'components/atoms/buttons/BottomButton';
import { festiTypes } from 'constants/festi';
import { homePage } from 'constants/pathname';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cls } from 'utils/cls';

type FestiResultProps = {
  selectedTypes: string[];
};

export const FestiResult = ({ selectedTypes }: FestiResultProps) => {
  const [mbti, setMbti] = useState<string[]>([]);
  const navigate = useNavigate();

  const typeCounts = selectedTypes.reduce((counts: { [key: string]: number }, type) => {
    counts[type] = (counts[type] || 0) + 1;
    return counts;
  }, {});

  const handleMoveHomePage = () => {
    // TODO: mbti 전송하는 api 연결
    navigate(homePage.path);
    history.pushState(null, '', '');
    window.location.reload();
  };

  useEffect(() => {
    (async () => {
      const mbtiType = festiTypes.reduce((acc: string[], types: string[]) => {
        if (typeCounts[types[0]] > 1) acc.push(types[0]);
        else acc.push(types[2]);
        return acc;
      }, []);

      setMbti(mbtiType);
    })();
  }, []);

  return (
    <div className='flex justify-center items-center h-screen px-4 -mt-8'>
      <div className='w-full'>
        <div className={cls('w-44 mx-auto justify-center items-center')}>
          <div className={cls('font-bold text-gray-800 text-center')}>핏짜님의 FESTI는?</div>
          <div className={cls('font-bold text-gray-900 text-4xl my-6 text-center')}>{mbti}</div>
          <div className={cls('mb-8')}>
            <img src={LogoCharacter} alt='캐릭터' />
          </div>
        </div>

        <div>
          {festiTypes.map((types, i) => {
            const countA: number = typeCounts[types[0]] ? typeCounts[types[0]] : 0;
            const countB: number = typeCounts[types[2]] ? typeCounts[types[2]] : 0;
            let widthClass: number = 1;
            if (countA >= 3 || countB >= 3) widthClass = 3;
            else if (countA >= 2) widthClass = 1;
            else if (countB >= 2) widthClass = 2;

            return (
              <div key={i} className='w-full grid grid-cols-5 gap-3 pb-2'>
                <div className='col-span-1'>
                  <div
                    className={cls(
                      `font-semibold text-3xl text-center`,
                      `${countA > countB && 'text-yellow-400'}`
                    )}
                  >
                    {types[0]}
                  </div>
                  <div
                    className={cls(
                      `text-xs text-center`,
                      `${countA > countB && 'text-yellow-600 font-bold'}`
                    )}
                  >
                    {types[1]}
                  </div>
                </div>
                <div className='col-span-3 pt-2.5'>
                  <div
                    className={cls(
                      'flex items-center mb-5 h-4 overflow-hidden rounded-full bg-gray-200',
                      `${widthClass === 1 ? 'justify-start' : 'justify-end'}`
                    )}
                  >
                    <div
                      className={cls(
                        'h-4 animate-pulse rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300',
                        `w-${widthClass === 1 ? countA : countB}/3`,
                        `w-${widthClass === 3 ? 'full' : ''}`
                      )}
                    ></div>
                  </div>
                </div>
                <div className='col-span-1'>
                  <div
                    className={cls(
                      `font-semibold text-3xl text-center`,
                      `${countA < countB && 'text-yellow-400'}`
                    )}
                  >
                    {types[2]}
                  </div>
                  <div
                    className={cls(
                      `text-xs text-center -mx-2`,
                      `${countA < countB && 'text-yellow-600 font-bold'}`
                    )}
                  >
                    {types[3]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <BottomButton title='시작하기' type='button' onClick={() => handleMoveHomePage()} />
    </div>
  );
};
