import { myReviewInfoApi } from 'apis/festApi';
import { ReviewItem } from 'components/atoms/review/ReviewItem';
import { useEffect, useState } from 'react';
import { ReviewType } from 'types/festDetail';
import LogoCharacter from 'assets/images/LogoCharacter.png';

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
    <div className='w-full h-[94.3%] '>
      {reviews && reviews?.length > 0 ? (
        reviews.map((review) => <ReviewItem review={review} />)
      ) : (
        <div className='w-full h-[94.3%] flex flex-col justify-center items-center'>
          <div>
            <img src={LogoCharacter} alt='이미지 없음' className='grayscale w-12 pb-4' />
          </div>
          <div>지금까지 작성한 리뷰가 없습니다.</div>
        </div>
      )}
    </div>
  );
};
