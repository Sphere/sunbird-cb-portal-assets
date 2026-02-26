FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm ci && npm run build

RUN zip -r dist.zip dist
