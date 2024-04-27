export type FestType = {
  festSeq: number;
  title: string;
  codeName: string;
  mainImg: string;
  startDate: string;
  endDate: string;
  useFee: string;
  avgPoint: number;
  cntReview: number;
  isContinue: boolean;
  isHeart: boolean;
};

export type FestLocationType = {
  festSeq: number;
  title: string;
  lot: number;
  lat: number;
  isHeart: boolean;
}