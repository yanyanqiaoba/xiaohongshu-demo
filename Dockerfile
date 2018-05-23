FROM node:alpine

WORKDIR /data/xiaohongshu-demo

COPY . .

EXPOSE 8000

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV SAML_HOST=''

CMD [ "npm", "start" ]
