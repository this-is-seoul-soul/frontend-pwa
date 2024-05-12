/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'apis';
import { FestivalRegisterType, FestDetailSearchType } from 'types/fest';
import { FestReivewParamType, ReviewRegisterType } from 'types/festDetail';
import { MapResponse } from 'types/map';

const festUrl = '/fest';

// 행사 등록
export const festivalRegisterApi = async (data: FestivalRegisterType) => {
  const url = festUrl;
  const res = await axios.post(url, data);
  return res;
};

// 행사 수정

// 행사 삭제

// 행사 조회(검색어)

// 행사 리뷰 등록
export const reviewRegisterApi = async (data: ReviewRegisterType) => {
  const url = festUrl + '/review';
  const res = await axios.post(url, data);
  return res;
}

// 행사 리뷰 수정

// 행사 리뷰 삭제

// 행사 리뷰 조회
export const getFestReviewListApi = async (params: FestReivewParamType) => {
  const url = festUrl + '/review';
  const res = await axios.get(url, { params: params });
  return res;
}

// 행사 리뷰 태그 조회
export const getFestReviewTagsApi = async (festSeq: number) => {
  const url = festUrl + `/review/tag/${festSeq}`;
  const res = axios.get(url);
  return res;
}

// 지도 기반 행사 조회
export const mapFestApi = async (data: MapResponse) => {
  const url = festUrl + '/search/map';

  const params: any = {
    lat: data.lat,
    lot: data.lot,
    distance: data.distance,
  };

  if (data.filter.length > 0) {
    params.filter = data.filter.join(',');
  }
  if (data.year.length > 0) {
    params.year = data.year.join(',');
  }
  if (data.codeName.length > 0) {
    params.codeName = data.codeName.join(',');
  }

  const res = await axios.get(url, {
    params: params,
  });
  return res;
};

// 분류에 맞는 행사 조회
export const searchFestApi = async (params: FestDetailSearchType) => {
  const url = festUrl + '/search';
  const res = await axios.get(url, { params: params });
  return res;
};

// 행사 상세 정보 조회
export const festDeatailInfoApi = async (festSeq: number) => {
  const url = festUrl + '/search/detail';
  const res = axios.get(url, { params: { festSeq: festSeq } });
  return res;
};

// 행사 찜 추가
export const festHeartAddApi = async (festSeq: number) => {
  const url = festUrl + `/heart/${festSeq}`;
  const res = axios.post(url);
  return res;
}

// 행사 찜 제거
export const festHeartDeleteApi = async (festSeq: number) => {
  const url = festUrl + `/heart/${festSeq}`;
  const res = axios.delete(url);
  return res;
}

// 행사 찜 조회
export const festHeartInfoApi = async () => {
  const url = festUrl + '/heart';
  const res = axios.get(url);
  return res;
};

// 행사 추천
export const festRecommendApi = async () => {
  const url = festUrl + '/recommend';
  const res = axios.get(url);
  return res;
}

// 내가 작성한 축제 조회
export const myFestInfoApi = async () => {
  const url = festUrl + '/mine';
  const res = axios.get(url);
  return res;
}

// 내가 작성한 리뷰 조회
export const myReviewInfoApi = async () => {
  const url = festUrl + '/review/mine';
  const res = axios.get(url);
  return res;
}