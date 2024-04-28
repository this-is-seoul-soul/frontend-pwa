import { TitleSection } from "components/atoms/titles/TitleReviewSection";
import { ListHeader } from "components/molecules/ListHeader";
import { festDetail } from "types/festDetail";
import { GoStar, GoStarFill  } from "react-icons/go";
import { useState } from "react";

interface TabReviewProps {
    fest: festDetail
}

export const TabReview = ({ fest }: TabReviewProps) => {
    const [rating, setRating] = useState<number>(0);

    const handleStarClick = (starNumber: number) => {
        setRating(starNumber);
    };

    const maxStars = 5;
    let stars = [];

    for (let i = 1; i <= maxStars; i++) {
        stars.push(
            <span key={i} onClick={() => handleStarClick(i)}>
                {i <= rating ? <GoStarFill size={32} className="text-yellow-400" /> : <GoStar size={32} className="text-gray-400" />}
            </span>
        );
    }
    return (
        <div>
            {/* <section className="p-4">
                <TitleSection title="이런 점이 좋았어요!" description={`총 ${fest.cntReview}명 참여`} />
            </section> */}
            <section className="p-4 bg-gray-100">
                <TitleSection title={fest.title} description="다녀오셨나요? 리뷰를 남겨보세요." />
                <div className="flex justify-center gap-1 pt-5 pb-4">{stars}</div>
            </section>
            <section>
                <div className="p-4">
                    <TitleSection title="리뷰" description={`평점 ${fest.avgPoint}\u00A0  총 ${fest.cntReview}개`} />
                </div>
                <ListHeader sort />
            </section>
        </div>
    );
}