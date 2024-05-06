import { ReviewItem } from 'components/atoms/review/ReviewItem';
import { ListHeader } from 'components/molecules/ListHeader';
import { cls } from 'utils/cls';
import { ReviewType } from 'types/review';
import { useEffect, useState } from 'react';
import { IoAlertCircleOutline } from 'react-icons/io5';

const ReviewDummy: ReviewType[] = [
  {
    reviewSeq: 1,
    nickname: '감자',
    mbti: 'ISFP',
    content: '아주 좋아요^^',
    point: 2.1,
    imgUrl: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/640px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      'https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp',
      'https://cdn.dominos.co.kr/admin/upload/goods/20230619_F33836Pn.jpg',
    ],
    isMine: true,
  },
  {
    reviewSeq: 2,
    nickname: '고구마',
    mbti: 'INFP',
    content: '아주 좋아요^^',
    point: 3.4,
    imgUrl: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/640px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      'https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp',
      'https://cdn.dominos.co.kr/admin/upload/goods/20230619_F33836Pn.jpg',
    ],
    isMine: true,
  },
  {
    reviewSeq: 3,
    nickname: '당근',
    mbti: 'ESTP',
    content: '아주 좋아요^^',
    point: 4.9,
    imgUrl: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/640px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      'https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp',
      'https://cdn.dominos.co.kr/admin/upload/goods/20230619_F33836Pn.jpg',
      'https://cdn.dominos.co.kr/admin/upload/goods/20230619_F33836Pn.jpg',
      'https://cdn.dominos.co.kr/admin/upload/goods/20230619_F33836Pn.jpg',
      'https://cdn.dominos.co.kr/admin/upload/goods/20230619_F33836Pn.jpg',
    ],
    isMine: true,
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
