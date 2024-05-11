import { myReviewInfoApi } from 'apis/festApi';
import { ReviewItem } from 'components/atoms/review/ReviewItem';
import { useEffect, useState } from 'react';
import { ReviewType } from 'types/review';

export const MyReviewDetails = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const res = await myReviewInfoApi();
      
      if (res.status === 200) {
        console.log('내 리뷰 조회 성공');
        setReviews(res.data.data);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <div>
        {reviews.map((review) => (
          <ReviewItem review={review} />
        ))}
      </div>
    </div>
  );
};
