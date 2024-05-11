# 빌드 단계
FROM node:18 as build

# pnpm 설치
RUN npm install -g pnpm

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 tsconfig.json을 복사하여 종속성 설치
COPY ./this-is-seoul-soul/ .
RUN pnpm install

# 소스 코드를 복사하여 애플리케이션 빌드
COPY . .
RUN NODE_OPTIONS="--max-old-space-size=4096" pnpm run build

# 실행 단계
FROM nginx:alpine

# nginx 설정 파일을 복사
COPY --from=build /app/dist /usr/share/nginx/html

# nginx 시작
CMD ["nginx", "-g", "daemon off;"]
