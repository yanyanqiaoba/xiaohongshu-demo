FROM docker-reg.devops.xiaohongshu.com/library/nodejs:v9.2.1

WORKDIR /data/xiaohongshu-demo

COPY . .

EXPOSE 8000

ENV NODE_ENV=production
ENV HOST=0.0.0.0


CMD [ "npm", "start" ]
