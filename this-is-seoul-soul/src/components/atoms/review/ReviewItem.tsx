import { FaStar, FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";
import type { ReviewType } from "types/review";
import { cls } from "utils/cls";

type ReviewProps = {
  review: ReviewType;
};

const ReviewDummy = {
  review: {
    reviewSeq: 1,
    nickname: "감자",
    mbti: "ISFP",
    content: "아주 좋아요^^",
    point: 4,
    imgUrl: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/640px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
      "https://i.namu.wiki/i/umI-heVYVS9miQNqXM13FRUOHHL4l1nzsZgN9XRLFG7nI_7Dyf-Myr6HmiWf9Qd7SAZQz3WYSQHPXXtGAwLTag.webp",
      "https://cdn.dominos.co.kr/admin/upload/goods/20230619_F33836Pn.jpg",
    ],
    isMine: true,
  },
};

export const ReviewItem = ({ review }: ReviewProps) => {
  review = review || ReviewDummy.review;

  const star: number = Math.round(review.point * 2) / 2;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (star >= i + 1) {
        stars.push(<FaStar key={i} color="gold" />);
      } else if (star >= i + 0.5) {
        stars.push(<FaRegStarHalfStroke color="gold" key={i} />);
      } else {
        stars.push(<FaRegStar color="gold" key={i} />);
      }
    }
    return stars;
  };

  return (
    <div className={cls(`max-w-full relative px-6 py-2`)}>
      <div className="relative flex my-2 items-center">
        <img src="https://cdn.dominos.co.kr/admin/upload/goods/20230619_F33836Pn.jpg" className={cls("w-10 h-10 object-cover rounded-full")} />
        <div className={cls("px-3 text-xs")}>
          <div className={cls("font-bold line-clamp-2")}>{review.nickname}</div>
          <div className={cls("text-gray-700")}>{review.mbti}</div>
        </div>
      </div>
      <div className={cls(`max-w-full relative px-1 py-2 font-bold text-xs flex`)}>
        {renderStars()}
      </div>
      <div className={cls(`max-w-full relative px-1 py-2 font-bold text-xs`)}>{review.content}</div>
      <div className="bg-white flex overflow-x-auto">
        {review.imgUrl.map((reviewImg, index) => (
          <div key={index} style={{ minWidth: "100px", maxWidth: "100px", margin: "0 5px" }}>
            <img
              src={reviewImg}
              alt={`Review Image ${index}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
