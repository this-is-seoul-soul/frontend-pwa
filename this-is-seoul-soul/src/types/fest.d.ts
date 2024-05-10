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

export type FestivalRegisterType = {
  title: string;
  codeName: string;
  guName: string;
  place: string;
  useTrgt: string;
  isFree: string;
  useFee: string;
  startDate: string;
  endDate: string;
  lot: number;
  lat: number;
  mainImg: string;
};
