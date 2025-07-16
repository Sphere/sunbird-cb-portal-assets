FROM node:12

WORKDIR /usr/src/app

COPY . .

#RUN sed -i 's/stretch/buster/' /etc/apt/sources.list && apt update && apt install -y zip
RUN sed -i 's|http://deb.debian.org/debian|http://archive.debian.org/debian|g' /etc/apt/sources.list && \
    sed -i 's|http://security.debian.org/|http://archive.debian.org/|g' /etc/apt/sources.list && \
    apt-get -o Acquire::Check-Valid-Until=false update && \
    apt-get install -y zip

RUN npm install && npm run build

RUN zip -r dist.zip dist
