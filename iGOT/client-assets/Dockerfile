FROM node:20

RUN apt-get update && apt-get install -y \
  build-essential \
  nasm \
  autoconf \
  automake \
  libtool

# install zip
RUN apt-get update && apt-get install -y zip && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app
COPY . .

RUN npm install
RUN npm run build
RUN zip -r dist.zip dist
