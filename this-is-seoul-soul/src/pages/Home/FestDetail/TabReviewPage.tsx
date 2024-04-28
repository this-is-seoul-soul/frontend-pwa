import { TitleSection } from "components/atoms/titles/TitleReviewSection";
import { ListHeader } from "components/molecules/ListHeader";
import { festDetail } from "types/festDetail";

interface TabReviewPageProps {
    fest: festDetail
}

export const TabReviewPage = ({ fest } : TabReviewPageProps) => {
    return (
        <div>
            <section className="p-4">
                <TitleSection title="이런 점이 좋았어요!" description={`총 ${fest.cntReview}명 참여`} />
            </section>
            <section className="p-4">
                <TitleSection title={fest.title} description="다녀오셨나요? 리뷰를 남겨보세요." />
            </section>
            <section>
                <div className="p-4">
                    <TitleSection title="리뷰" description={`평점 ${fest.avgPoint}\u00A0  총 ${fest.cntReview}개`} />
                </div>
                <ListHeader sort />
                <div>

                </div>
            </section>
        </div>
    );
}