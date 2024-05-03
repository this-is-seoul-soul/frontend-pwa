import axios from 'apis';

export interface MemberResponse {
  email: string;
  nickname: string;
  profile: FileList;
  googleId: string;
}

const memberUrl = '/member';

// 구글 소셜 로그인
export const signInGoogleApi = async (googleId: string) => {
  const url = memberUrl + '/login/google';
  const res = await axios.get(url, { params: { googleId: googleId } });
  return res;
};

// 랜덤 닉네임 생성
export const randomNicknameApi = async () => {
  const url = memberUrl + '/nickname';
  const res = await axios.get(url);
  return res;
};

// 닉네임 중복 검사
export const nicknameDuplicateApi = async (nickname: string) => {
  const url = memberUrl + '/nickname/duplicate';
  const res = await axios.get(url, { params: nickname });
  return res;
};

// 닉네임 수정
export const nicknameEditApi = async (nickname: string) => {
  const url = memberUrl + '/nickname';
  const res = await axios.patch(url, { nickname: nickname });
  return res;
};

// 회원가입
export const signUpApi = async (data: MemberResponse) => {
  const url = memberUrl;
  const res = await axios.post(url, data);
  return res;
};

// mbti 검사 결과
export const festiResultApi = async (festi: string) => {
  const url = memberUrl + '/mbti';
  const res = await axios.patch(url, { MBTI: festi });
  return res;
};

// 회원 정보 조회
export const userInfoApi = async () => {
  const url = memberUrl + '/info';
  const res = await axios.get(url);
  return res;
};

// 로그아웃
export const userLogoutApi = async () => {
  const url = memberUrl + '/logout';
  const res = await axios.get(url);
  return res;
};

// 회원 탈퇴
export const userQuitApi = async () => {
  const url = memberUrl + '/quit';
  const res = await axios.delete(url);
  return res;
};

// Refresh Token으로 Access Token 재발급
export const refreshTokenApi = async () => {
  const url = memberUrl + '/token/new';
  const res = await axios.get(url);
  return res;
};

// 리뷰 작성자 정보 조회

// 회원 등록 상태 파악
export const userStatusApi = async (googleId: string) => {
  const url = memberUrl + '/status';
  const res = await axios.get(url, { params: googleId });
  console.log(res);
  return res;
};
