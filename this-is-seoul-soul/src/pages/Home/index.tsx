import { FestInfoHomeItem } from "components/atoms/festInfo/FestInfoHomeItem";
import { SearchBar } from "components/organisms/SearchBar";
import { ListHeader } from "components/molecules/ListHeader";

const FestDummy = [
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },
  {
    festSeq: 1,
    title: '농어촌 토마토 행사',
    codeName: '전시/미술',
    mainImg: '',
    startDate: '2024/01/12',
    endDate: '2024/02/10',
    useFee: '무료',
    avgPoint: 4.3,
    cntReview: 66,
    isContinue: true,
    isHeart: false,
  },

];

export const HomePage = () => {
  const nickname = "핏짜";

  return <div className="w-full h-full bg-yellow-50">
    <SearchBar />
    <section>
      {/* TODO: 배너 */}
    </section>
    <section>
      <div className="pl-6 pt-9 pb-3 text-lg bg-white">{nickname}님,<br /><b>이런 축제는 어떤가요?</b></div>
      <div className="pl-2 pb-8 bg-white flex overflow-x-auto">
        {FestDummy.length > 0 &&
          FestDummy.map((fest, index) => (
            <div key={index}>
              <FestInfoHomeItem fest={fest} />
            </div>
        ))}
      </div>
    </section>
    <section>
      <div className="pl-6 pt-9 pb-3 text-lg bg-white"><b>원하시는 축제</b>를 만나보세요!</div>
      <ListHeader total={24} />
      <div className={`grid grid-cols-2 gap-4 p-5 pb-24 bg-white`}>
        {FestDummy.length > 0 &&
          FestDummy.map((fest, index) => (
            <div key={index}>
              <FestInfoHomeItem fest={fest} />
            </div>
        ))}
      </div>
    </section>


  </div>;
};
