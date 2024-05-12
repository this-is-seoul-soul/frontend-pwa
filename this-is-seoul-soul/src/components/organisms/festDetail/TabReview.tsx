import { TitleSection } from 'components/atoms/titles/TitleReviewSection';
import { ListHeader } from 'components/molecules/ListHeader';
import { FestDetailType, FestReivewParamType, ReviewTagsType, ReviewsType } from 'types/festDetail';
import { GoStar, GoStarFill } from 'react-icons/go';
import { useEffect, useState } from 'react';
import { useAppNavigation } from 'hooks/useAppNavigation';
import { TagBar } from 'components/atoms/reviewInfo/TagBar';
import { ReviewItem } from 'components/atoms/review/ReviewItem';
import { sortList } from 'constants/sort';
import { getFestReviewListApi, getFestReviewTagsApi } from 'apis/festApi';

interface TabReviewProps {
  fest: FestDetailType;
}

export const TabReview = ({ fest }: TabReviewProps) => {
  const navigator = useAppNavigation();
  const [rating, setRating] = useState<number>(0);
  const [tags, setTags] = useState<ReviewTagsType>();
  const [reviews, setReviews] = useState<ReviewsType[]>();
  const [params, setParams] = useState<FestReivewParamType>({
    festSeq: fest.festSeq,
    sort: 1,
    page: 1,
    limit: 50,
  });

  const handleStarClick = (starNumber: number) => {
    setRating(starNumber);
    navigator.navigateToReviewCreate(starNumber, fest.festSeq);
  };

  const getReviewTags = async () => {
    const result = await getFestReviewTagsApi(fest.festSeq);
    if (result.status === 200) {
      setTags(result.data.data);
    }
  };

  const getReviews = async () => {
    const result = await getFestReviewListApi(params);
    if (result.status === 200) {
      setReviews(result.data.data);
    }
  };

  useEffect(() => {
    getReviews();
  }, [params]);

  useEffect(() => {
    getReviewTags();
    getReviews();
  }, []);

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

  const handleSort = (i: number) => {
    setParams((prev) => ({
      ...prev,
      sort: i,
    }));
  };

  return (
    <div className='scrollbar-hide'>
      <section className='p-4'>
        <TitleSection title='이런 점이 좋았어요!' description={`총 ${fest.cntReview}명 참여`} />
        <div className='py-4'>
          {tags?.tag.map((item) => {
            return (
              <div key={item.tag}>
                <TagBar index={item.tag} tagTotal={tags.total} tag={item.tag} cnt={item.cnt} />
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
        <ListHeader total={reviews?.length} sort={{ sortList: sortList, callback: handleSort }} />
        <div className='pt-2 pb-14'>
          {reviews?.map((reviewItem) => {
            return <ReviewItem review={reviewItem} />;
          })}
        </div>
      </section>
    </div>
  );
};
