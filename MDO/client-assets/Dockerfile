FROM node:12

WORKDIR /usr/src/app

COPY . .
RUN sed -i 's/stretch/buster/' /etc/apt/sources.list && apt update && apt install -y zip
RUN apt update && apt install -y zip

RUN npm install && npm run build

RUN zip -r dist.zip dist
