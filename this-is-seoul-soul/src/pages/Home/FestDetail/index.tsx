import { TopHeader } from "components/molecules/TopHeader";
import { useSetAtom } from "jotai";
import { useSearchParams } from "react-router-dom";
import { headerTitleAtom } from "stores/headerStore";
import { festDetail } from "types/festDetail";

interface Props {}

const fest : festDetail = {
    festSeq: 12345,
    title: "오페라 갈라",
    codename: "뮤지컬/오페라",
    guname: "종로구",
    place: "세종대극장",
    useTrgt: "7세 이상 관람 가능(2017년생부터 관람 가능)",
    isFree: "R 50,000원 / S 40,000원 / A 30,000원",
    useFee: "유료",
    startDate: "2024-11-21",
    endDate: "2024-11-24",
    lot: 37.5726241,
    lat: 126.9760053,
    orgLink: "https://www.sejongpac.or.kr/portal/performance/performance/view.do?menuNo=200004&performIdx=34877",
    mainImg: "https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=a6cb4e5a9b5b404e83454b084d88a399&thumb=Y",
    avgPoint: 4.3,
    cntReview: 35,
    isContinue: true,
    isHeart: true,
    tag: [
        {
            tag: 1,
            cnt: 23
        }
    ]
}

export const FestDetailPage = ({ }: Props) => {
    const [searchParams] = useSearchParams();
    const setHeaderTitle = useSetAtom(headerTitleAtom); 
    const param = searchParams.get('festSeq') || "";
    const festSeq = parseInt(param);
    setHeaderTitle(fest.title);

    return (
        <div>
            <img src={fest.mainImg} alt="" />
            <section><div>fef</div></section>
            <section><div>fefe</div></section>            
        </div>
    );
}