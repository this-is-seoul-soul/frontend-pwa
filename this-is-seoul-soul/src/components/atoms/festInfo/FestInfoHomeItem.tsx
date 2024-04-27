import Default from 'assets/images/Default.png';
import type { Fest } from 'types/fest';
import { codeNameColor } from 'constants/codename';
import { useState } from 'react';
import { GoBookmark, GoBookmarkFill, GoStarFill  } from "react-icons/go";
import { useAppNavigation } from "hooks/useAppNavigation";

type FestInfoProps = {
  fest: Fest;
};


export const FestInfoHomeItem = ({ fest }: FestInfoProps) => {
    const [isHeart, setIsHeart] = useState(fest.isHeart);
    const codeColor = codeNameColor[fest.codeName] || 'bg-gray-100';
    const image = fest.mainImg || Default;
    const navigation = useAppNavigation();

    const handleHeart = async () => {
    // TODO: 찜 추가/취소 api 연결
    setIsHeart(!isHeart);
    };

    return (
        <div className="flex flex-col p-2 bg-white gap-1" onClick={() => navigation.navigateToFestDetail(fest.festSeq)}>
            <div id="image-container" className="relative w-full min-w-[140px] min-h-[140px] h-0 pb-[100%]">
                <img src={image} className="absolute w-full h-full left-0 right-0 top-0 object-cover" />
            </div>
            <div id="category" className="flex items-center justify-between pt-1">
                <div className={`${codeColor} rounded-lg text-xs px-2 py-1`}>
                    {fest.codeName}
                </div>
                <div className="relative" onClick={handleHeart}>
                    {isHeart == true ? (
                        <GoBookmarkFill  size={"1.25rem"} className="  fill-yellow-400"/>
                    ) : (
                        <GoBookmark size={"1.25rem"} className=" text-gray-400 " />
                    )}
                </div>
            </div>
            <div id="title" className="font-bold py-1">{fest.title}</div>
            <div id="fee" className="text-xs flex items-center gap-2">
                <div className="text-gray-700">이용 요금</div>
                <div>{fest.useFee}</div>
            </div>
            <div className="text-xs flex flex-wrap justify-start items-center gap-2">
                {fest.isContinue && <div>{ fest.isContinue ? "진행중" : "미진행"}</div>}
                <div className="text-xs flex items-center gap-1">
                    <GoStarFill  className="fill-yellow-400" />
                    {fest.avgPoint}
                </div>
                <div className="text-xs flex items-center gap-1">
                    <div>리뷰</div>
                    {fest.cntReview >= 50 ? <div>50+</div> : <div>{fest.cntReview}</div>}
                </div>
            </div>
            <div id="period" className="text-xs text-gray-700">
                {fest.startDate} ~ {fest.endDate}
            </div>
        </div>
    );
};
