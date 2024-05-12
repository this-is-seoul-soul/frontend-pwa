# 실행 단계
FROM nginx:alpine
WORKDIR /app
RUN mkdir ./build
ADD ./dist ./build
RUN rm /etc/nginx/conf.d/default.conf
COPY ./front.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]
