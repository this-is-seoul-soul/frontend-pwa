import Star from 'assets/images/Star.png';
import Default from 'assets/images/Default.png';
import { cls } from 'utils/cls';
import type { FestType } from 'types/fest';
import { codeNameColor } from 'constants/codename';
import { useState } from 'react';
import { pathname } from 'constants/pathname';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';

type FestInfoProps = {
  fest: FestType;
};

const FestDummy = {
  fest: {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
};

export const FestInfoMapItem = ({ fest }: FestInfoProps) => {
  const label = (pathname.find((item) => item.path === location.pathname) || {}).label;

  fest = fest || FestDummy.fest;

  const [isHeart, setIsHeart] = useState(fest.isHeart);
  const codeColor = codeNameColor[fest.codeName] || 'bg-gray-100';
  const image = fest.mainImg || Default;

  const handleHeart = async () => {
    // TODO: 찜 추가/취소 api 연결
    setIsHeart(!isHeart);
  };

  return (
    <div
      className={cls(
        `max-w-full relative ${label === '저장' ? '' : 'rounded-md shadow-lg mx-4'} px-4 py-2`
      )}
    >
      <div className={cls('w-5 absolute top-5 right-4')} onClick={handleHeart}>
        {isHeart == true ? (
          <IoBookmark size={'1.25rem'} className={cls('fill-yellow-400')} />
        ) : (
          <IoBookmarkOutline size={'1.25rem'} />
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
            <span className={cls('w-3')}>
              <img src={Star} alt='평점' />
            </span>
            <span className={cls('px-1')}>{fest.avgPoint}</span>
            <span className={cls('px-2')}>리뷰</span>
            {fest.cntReview >= 50 ? <span>50+</span> : <span>{fest.cntReview}</span>}
          </div>
          <div className={cls('text-gray-700')}>
            {fest.startDate} ~ {fest.endDate}
          </div>
        </div>
      </div>
    </div>
  );
};
