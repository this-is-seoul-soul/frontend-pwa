import Default from 'assets/images/Default.png';
import { codeNameColor } from 'constants/codename';
import { useState } from 'react';
import { GoBookmark, GoBookmarkFill, GoStarFill } from 'react-icons/go';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { FestType } from 'types/fest';
import { festHeartAddApi, festHeartDeleteApi } from 'apis/festApi';
import { getFestState } from 'utils/fest';

type FestInfoProps = {
  fest: FestType;
};

export const FestInfoHomeItem = ({ fest }: FestInfoProps) => {
  const [isHeart, setIsHeart] = useState(fest.heart);
  const festStatus = getFestState(fest.continue, fest.startDate, fest.endDate);
  const codeColor = codeNameColor[fest.codename] || 'bg-gray-100';
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
    if (res.status === 200 || res.status === 201) {
      setIsHeart(!isHeart);
    }
  };

  return (
    <div
      className='flex flex-col p-2 bg-white gap-1'
      onClick={() => navigation.navigateToFestDetail(fest.festSeq)}
    >
      <div
        id='image-container'
        className='relative w-full min-w-[140px] min-h-[140px] h-0 pb-[100%]'
      >
        <img
          src={fest.mainImg ? fest.mainImg : Default}
          className='absolute w-full h-full left-0 right-0 top-0 object-cover'
        />
      </div>
      <div id='category' className='flex items-center justify-between pt-1'>
        <div className={`${codeColor} rounded-lg text-xs px-2 py-1`}>{fest.codename}</div>
        <div onClick={(e) => handleHeart(e)}>
          {isHeart ? (
            <GoBookmarkFill size={'1.25rem'} className='  fill-yellow-400' />
          ) : (
            <GoBookmark size={'1.25rem'} className=' text-gray-400 ' />
          )}
        </div>
      </div>
      <div id='title' className='font-bold py-1'>
        {fest.title.length > 8 ? `${fest.title.substring(0, 8)}...` : fest.title}
      </div>
      <div id='fee' className='text-xs flex items-center gap-2'>
        <div className='text-gray-700'>이용 요금</div>
        <div>
          {fest.useFee !== ''
            ? fest.useFee.length > 12
              ? `${fest.useFee.substring(0, 8)}...`
              : fest.useFee
            : '요금 정보 X'}
        </div>
      </div>
      <div className='text-xs flex flex-wrap justify-start items-center gap-2'>
        <div
          className={`${
            festStatus === '진행중'
              ? 'bg-green-100 py-[2px] px-[4px] rounded-md'
              : 'bg-gray-200 py-[2px] px-[4px] rounded-md'
          }`}
        >
          {festStatus}
        </div>
        <div className='text-xs flex items-center gap-1'>
          <GoStarFill className='fill-yellow-400' />
          {fest.avgPoint}
        </div>
        <div className='text-xs flex items-center gap-1'>
          <div>리뷰</div>
          {fest.cntReview >= 50 ? <div>50+</div> : <div>{fest.cntReview}</div>}
        </div>
      </div>
      <div id='period' className='text-xs text-gray-700 font-pretendardThin'>
        {fest.startDate} ~ {fest.endDate}
      </div>
    </div>
  );
};
