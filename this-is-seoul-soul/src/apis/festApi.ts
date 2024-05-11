/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'apis';
import { FestivalRegisterType } from 'types/fest';
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

// 행사 리뷰 수정

// 행사 리뷰 삭제

// 행사 리뷰 조회

// 행사 리뷰 태그 조회

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

// 행사 상세 정보 조회

// 행사 찜 추가

// 행사 찜 제거

// 행사 찜 조회

// 행사 추천
