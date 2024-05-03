import { TitleSection } from 'components/atoms/titles/TitleReviewSection';
import { ListHeader } from 'components/molecules/ListHeader';
import { festDetail, reviewTagList } from 'types/festDetail';
import { GoStar, GoStarFill } from 'react-icons/go';
import { useState } from 'react';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { TagBar } from 'components/atoms/reviewInfo/TagBar';
import { ReviewItem } from 'components/atoms/review/ReviewItem';

interface TabReviewProps {
  fest: festDetail;
}

const dummyTags: reviewTagList = {
  total: 12,
  tag: [
    {
      tag: 0,
      cnt: 4,
    },
    {
      tag: 1,
      cnt: 3,
    },
    {
      tag: 2,
      cnt: 2,
    },
    {
      tag: 3,
      cnt: 1,
    },
    {
      tag: 4,
      cnt: 0,
    },
  ],
};

const ReviewDummy = [
  {
    reviewSeq: 1,
    nickname: '감자',
    mbti: 'ISFP',
    content: '아주 좋아요^^',
    point: 4,
    imgUrl: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/640px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      'https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp',
      'https://cdn.dominos.co.kr/admin/upload/goods/20230619_F33836Pn.jpg',
    ],
    isMine: true,
  },
  {
    reviewSeq: 1,
    nickname: '감자',
    mbti: 'ISFP',
    content: '아주 좋아요^^',
    point: 4,
    imgUrl: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/640px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      'https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp',
      'https://cdn.dominos.co.kr/admin/upload/goods/20230619_F33836Pn.jpg',
    ],
    isMine: true,
  },
];

export const TabReview = ({ fest }: TabReviewProps) => {
  const navigator = useAppNavigation();
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (starNumber: number) => {
    setRating(starNumber);
    navigator.navigateToReviewCreate(starNumber, fest.festSeq);
  };

  const maxStars = 5;
  let stars = [];

  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <span key={i} onClick={() => handleStarClick(i)}>
        {i <= rating ? (
          <GoStarFill size={32} className='text-yellow-400' />
        ) : (
          <GoStar size={32} className='text-gray-400' />
        )}
      </span>
    );
  }
  return (
    <div className='scrollbar-hide'>
      <section className='p-4'>
        <TitleSection title='이런 점이 좋았어요!' description={`총 ${fest.cntReview}명 참여`} />
        <div className='py-4'>
          {dummyTags?.tag.map((item) => {
            return (
              <div key={item.tag}>
                <TagBar index={item.tag} tagTotal={dummyTags.total} tag={item.tag} cnt={item.cnt} />
              </div>
            );
          })}
        </div>
      </section>
      <section className='p-4 bg-gray-100'>
        <TitleSection title={fest.title} description='다녀오셨나요? 리뷰를 남겨보세요.' />
        <div className='flex justify-center gap-1 pt-5 pb-4'>{stars}</div>
      </section>
      <section>
        <div className='p-4'>
          <TitleSection
            title='리뷰'
            description={`평점 ${fest.avgPoint}\u00A0  총 ${fest.cntReview}개`}
          />
        </div>
        <ListHeader sort />
        <div className='pt-2 pb-14'>
          {ReviewDummy.map((reviewItem) => {
            return <ReviewItem review={reviewItem} />;
          })}
        </div>
      </section>
    </div>
  );
};
