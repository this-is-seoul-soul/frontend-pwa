import { ChangeEvent, useState } from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import { useLocation, useSearchParams } from "react-router-dom";
import { MdAddAPhoto } from "react-icons/md";

interface Props {}

/* Request Dto
{
    “content”: “정말 좋아요”,
    “point”: 5,
    “imgUrl”: [ “image1.jpg”, “image2.jpg” ],
    “tag”: [1, 2, 4],
    “festSeq”: 2
}
*/

export const ReviewCreatePage = ({ }: Props) => {
    const MAX_LENGTH = 1000;
    let [inputCount, setInputCount] = useState(0);
    const location = useLocation();
    // let { rating } = location.state;
    const [searchParams] = useSearchParams();
    const param = searchParams.get('festSeq') || "";
    const festSeq = parseInt(param);
    
    const [rating, setRating] = useState<number>(location.state.rating);

    const handleStarClick = (starNumber: number) => {
        setRating(starNumber);
    };

    const handleReviewText = (event:ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        if (text.length > MAX_LENGTH) {
            return
        }
        
        setInputCount(text.length);
    }

    const maxStars = 5;
    let stars = [];

    for (let i = 1; i <= maxStars; i++) {
        stars.push(
            <span key={i} onClick={() => handleStarClick(i)}>
                {i <= rating ? <GoStarFill size={52} className="text-yellow-400" /> : <GoStar size={52} className="text-gray-300" />}
            </span>
        );
    }

    return (
        <div>
            {/* festSeq: {festSeq} */}
            <section>
                <div className="flex flex-col items-center gap-2 pt-16">
                    <div className="flex justify-center gap-1">{stars}</div>
                    <div className="text-xl"><span className="font-bold">{rating}</span> / 5</div>
                </div>
            </section>
            <section className="pt-8 px-8 flex">
                <div className="w-[76px] min-w-[76px] h-[76px] flex justify-center items-center mr-1 bg-white border border-yellow-400 rounded-lg">
                    <MdAddAPhoto size={36} className="text-yellow-400 mr-[4px]" />
                </div>
                <div className="flex gap-1 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <img className=" w-[76px] h-[76px] object-cover border-2 border-gray-200 rounded-lg" src="https://i.namu.wiki/i/alELF6s0wKly1dUXn2vjdDYFbOjrxITYnTEEHAB-1cNqjwOT56cOT8QTNdzPqWTndhqH2ZkTt-YAkVMmkOveiWfXG8MDhDbzvU5dgUjiDsRdvI-KYLm4_JNO96-PiPevkQsBFJr-XObx1BGfL3COog.webp" alt="" />
                    <img className=" w-[76px] h-[76px] object-cover border-2 border-gray-200 rounded-lg" src="https://i.namu.wiki/i/alELF6s0wKly1dUXn2vjdDYFbOjrxITYnTEEHAB-1cNqjwOT56cOT8QTNdzPqWTndhqH2ZkTt-YAkVMmkOveiWfXG8MDhDbzvU5dgUjiDsRdvI-KYLm4_JNO96-PiPevkQsBFJr-XObx1BGfL3COog.webp" alt="" />
                    <img className=" w-[76px] h-[76px] object-cover border-2 border-gray-200 rounded-lg" src="https://i.namu.wiki/i/alELF6s0wKly1dUXn2vjdDYFbOjrxITYnTEEHAB-1cNqjwOT56cOT8QTNdzPqWTndhqH2ZkTt-YAkVMmkOveiWfXG8MDhDbzvU5dgUjiDsRdvI-KYLm4_JNO96-PiPevkQsBFJr-XObx1BGfL3COog.webp" alt="" />
                    <img className=" w-[76px] h-[76px] object-cover border-2 border-gray-200 rounded-lg" src="https://i.namu.wiki/i/alELF6s0wKly1dUXn2vjdDYFbOjrxITYnTEEHAB-1cNqjwOT56cOT8QTNdzPqWTndhqH2ZkTt-YAkVMmkOveiWfXG8MDhDbzvU5dgUjiDsRdvI-KYLm4_JNO96-PiPevkQsBFJr-XObx1BGfL3COog.webp" alt="" />
                    <img className="w-[76px] h-[76px] object-cover border-2 border-gray-200 rounded-lg" src="https://img.kbs.co.kr/kbs/620/news.kbs.co.kr/data/fckeditor/new/image/2024/04/01/169771711958787915.jpg" alt="" />               
                </div>
            </section>
            <section className="px-8 py-4">
                <textarea onChange={handleReviewText} maxLength={MAX_LENGTH} placeholder="리뷰를 작성하세요." className="p-4 w-full h-56 border border-gray-500 rounded-lg focus:outline-none  focus-visible:border-yellow-400 resize-none" />
                <div className="flex justify-end text-gray-500">
                    <span>{inputCount}</span>
                    <span>/{MAX_LENGTH} 자</span>
                </div>
            </section>
        </div>
    );
}