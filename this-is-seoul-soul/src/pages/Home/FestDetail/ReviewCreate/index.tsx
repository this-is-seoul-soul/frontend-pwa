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
    let { rating } = location.state;
    const [searchParams] = useSearchParams();
    const param = searchParams.get('festSeq') || "";
    const festSeq = parseInt(param);
    

    console.log(location)
    console.log(location.state)

    return (
        <div>
            리뷰 등록 페이지
            별점: {rating}
            festSeq: { festSeq}
        </div>
    );
}