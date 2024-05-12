import { ReviewItem } from 'components/atoms/review/ReviewItem';
import { ListHeader } from 'components/molecules/ListHeader';
import { cls } from 'utils/cls';
import { useEffect, useState } from 'react';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { ReviewType } from 'types/festDetail';

const ReviewDummy: ReviewType[] = [
  {
    reviewSeq: 1,
    nickName: '질투하는 공룡',
    mbti: 'DACE',
    content: 'this place is so good!',
    point: 5,
    imgUrl: ['string'],
    tag: [0],
    mine: true,
  },
  {
    reviewSeq: 1,
    nickName: '질투하는 공룡',
    mbti: 'DACE',
    content: 'this place is so good!',
    point: 5,
    imgUrl: ['string'],
    tag: [0],
    mine: true,
  },
];

export const ReviewList = () => {
  const [reviewList, setReview] = useState<ReviewType[]>(ReviewDummy);

  useEffect(() => {
    const handleReview = async () => {
      // TODO: 리뷰 조회
      setReview(ReviewDummy);
    };

    handleReview();
  }, []);

  return (
    <div className={cls('pt-4')}>
      <div>
        <ListHeader total={reviewList.length} />
      </div>
      <div>
        {reviewList.length > 0 ? (
          <div>
            {reviewList.map((review) => (
              <ReviewItem review={review} />
            ))}
          </div>
        ) : (
          <div className={cls('max-w-full mt-32 relative flex justify-center items-center')}>
            <div>
              <IoAlertCircleOutline size={40} className={cls('mx-auto my-2')} />
              <div className={cls('text-sm')}>저장된 장소가 없습니다.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
