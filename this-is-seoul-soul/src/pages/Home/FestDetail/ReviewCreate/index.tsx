import { useState } from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import { useLocation, useSearchParams } from "react-router-dom";

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
    const location = useLocation();
    // let { rating } = location.state;
    const [searchParams] = useSearchParams();
    const param = searchParams.get('festSeq') || "";
    const festSeq = parseInt(param);
    
    const [rating, setRating] = useState<number>(location.state.rating);

    const handleStarClick = (starNumber: number) => {
        setRating(starNumber);
    };

    const maxStars = 5;
    let stars = [];

    for (let i = 1; i <= maxStars; i++) {
        stars.push(
            <span key={i} onClick={() => handleStarClick(i)}>
                {i <= rating ? <GoStarFill size={52} className="text-yellow-400" /> : <GoStar size={52} className="text-gray-400" />}
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
        </div>
    );
}