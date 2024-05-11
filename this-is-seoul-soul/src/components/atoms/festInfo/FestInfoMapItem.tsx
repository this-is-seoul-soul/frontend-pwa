import Default from 'assets/images/Default.png';
import { cls } from 'utils/cls';
import type { FestType } from 'types/fest';
import { codeNameColor } from 'constants/codename';
import { useState } from 'react';
import { pathname } from 'constants/pathname';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { GoBookmark, GoBookmarkFill, GoStarFill } from 'react-icons/go';
import { festHeartAddApi, festHeartDeleteApi } from 'apis/festApi';

type FestInfoProps = {
  fest: FestType;
};

export const FestInfoMapItem = ({ fest }: FestInfoProps) => {
  const label = (pathname.find((item) => item.path === location.pathname) || {}).label;

  const [isHeart, setIsHeart] = useState(fest.isHeart);
  const codeColor = codeNameColor[fest.codeName] || 'bg-gray-100';
  const image = fest.mainImg || Default;
  const navigation = useAppNavigation();

  const handleHeart = async (event: React.MouseEvent) => {
    // TODO: 찜 추가/취소 api 연결
    event.stopPropagation();
    let res;
    if (isHeart) {
      res = await festHeartDeleteApi(fest.festSeq);
    } else {
      res = await festHeartAddApi(fest.festSeq);
    }
    console.log('북마크', res);
    if (res.status === 200) {
      setIsHeart(!isHeart);
    }
  };

  return (
    <div
      key={fest.festSeq}
      className={cls(
        `max-w-full relative ${label === '저장' ? '' : 'rounded-md shadow-lg mx-4'} px-4 py-2`
      )}
      onClick={() => navigation.navigateToFestDetail(fest.festSeq)}
    >
      <div className={cls('w-5 absolute top-5 right-4 z-10')} onClick={(e) => handleHeart(e)}>
        {isHeart == true ? (
          <GoBookmarkFill size={'1.25rem'} className={cls('fill-yellow-400')} />
        ) : (
          <GoBookmark size={'1.25rem'} className=' text-gray-400 ' />
        )}
      </div>
      <div className={cls('relative flex my-3 items-center')}>
        <img src={image} className={cls('w-28 h-28 object-cover')} />
        <div className={cls('px-3 text-xs')}>
          <div className={cls(`${codeColor} inline-block rounded-lg px-2 py-1`)}>
            {fest.codeName}
          </div>
          <div className={cls('font-bold text-lg pt-2 line-clamp-2')}>{fest.title}</div>
          <div className={cls('py-1')}>
            <span className={cls('text-gray-700')}>이용 요금</span>
            <span className={cls('px-3')}>{fest.useFee}</span>
          </div>
          <div className={cls('relative flex flex-wrap items-center mb-1')}>
            {fest.isContinue && <span className={cls('pr-3')}>진행 중</span>}
            <div className='text-xs flex items-center gap-1'>
              <GoStarFill className='fill-yellow-400' />
              {fest.avgPoint}
            </div>
            <span className={cls('px-2')}>리뷰</span>
            {fest.cntReview >= 50 ? <span>{fest.cntReview}</span> : <span>{fest.cntReview}</span>}
          </div>
          <div className={cls('text-gray-700')}>
            {fest.startDate} ~ {fest.endDate}
          </div>
        </div>
      </div>
    </div>
  );
};
