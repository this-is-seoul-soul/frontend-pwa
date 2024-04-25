import Star from 'assets/images/Star.png';
import Bookmark from 'assets/images/Bookmark.png';
import BookmarkChecked from 'assets/images/BookmarkChecked.png';
import Default from 'assets/images/Default.png';
import { cls } from 'utils/cls';
import type { Fest } from 'types/fest';
import { codeNameColor } from 'constants/codename';
import { useState } from 'react';

type FestInfoProps = {
  fest: Fest;
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
  fest = fest || FestDummy.fest;

  const [isHeart, setIsHeart] = useState(fest.isHeart);
  const codeColor = codeNameColor[fest.codeName] || 'bg-gray-100';
  const image = fest.mainImg || Default;

  const handleHeart = async () => {
    // TODO: 찜 추가/취소 api 연결
    setIsHeart(!isHeart);
  };

  return (
    <div className={cls('max-w-full h-[180px] relative rounded-md shadow-lg px-4 py-2 mx-4')}>
      <div className={cls('w-5 absolute top-5 right-4')} onClick={handleHeart}>
        {isHeart == true ? (
          <img src={BookmarkChecked} alt="즐겨찾기" />
        ) : (
          <img src={Bookmark} alt="즐겨찾기" />
        )}
      </div>
      <div className="absolute flex items-center">
        <img src={image} className={cls('w-36 h-36')} />
        <div className={cls('p-3')}>
          <div className={cls(`${codeColor} inline-block rounded-lg text-sm px-2 py-1`)}>
            {fest.codeName}
          </div>
          <div className={cls('font-bold text-lg pt-2')}>{fest.title}</div>
          <div className="py-1">
            <span className={cls('text-sm text-gray-700 ')}>이용 요금</span>
            <span className={cls('px-3')}>{fest.useFee}</span>
          </div>
          <div className="relative flex flex-wrap items-center">
            {fest.isContinue && <span className="pr-3">진행 중</span>}
            <span className={cls('w-3')}>
              <img src={Star} alt="평점" />
            </span>
            <span className={cls('px-1')}>{fest.avgPoint}</span>
            <span className="px-2">리뷰</span>
            {fest.cntReview >= 50 ? <span>50+</span> : <span>{fest.cntReview}</span>}
          </div>
          <div className={cls('text-sm text-gray-700')}>
            {fest.startDate} ~ {fest.endDate}
          </div>
        </div>
      </div>
    </div>
  );
};
