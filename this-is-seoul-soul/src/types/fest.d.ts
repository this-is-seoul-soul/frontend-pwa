export type FestType = {
  festSeq: number;
  title: string;
  codename: string;
  mainImg: string;
  startDate: string;
  endDate: string;
  useFee: string;
  avgPoint: number;
  cntReview: number;
  continue: boolean;
  heart: boolean;
};

export type FestLocationType = {
  festSeq: number;
  title: string;
  lot: number;
  lat: number;
  isHeart: boolean;
};

export type FestivalRegisterType = {
  title: string;
  codename: string;
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

export type FestDetailSearchType = {
  isFree: boolean;
  isContinue: boolean;
  region: string;
  codename: string;
  sort: number;
  page: number;
  limit: number;
};

export type FestSearchType = {
  keyword: string;
  lot: number;
  lat: number;
};
