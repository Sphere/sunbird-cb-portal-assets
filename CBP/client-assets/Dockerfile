FROM node:14

WORKDIR /usr/src/app

COPY . .
RUN sed -i '/stretch-updates/d' /etc/apt/sources.list && \
    sed -i 's|http://deb.debian.org/debian|http://archive.debian.org/debian|g' /etc/apt/sources.list && \
    sed -i 's|http://security.debian.org/debian-security|http://archive.debian.org/debian-security|g' /etc/apt/sources.list && \
    echo 'Acquire::Check-Valid-Until "false";' > /etc/apt/apt.conf.d/99no-check-valid-until && \
    apt update && \
        apt install -y zip nasm && \
    ( apt install -y libjpeg-turbo-progs || \
      ( curl -fsSL -o /tmp/libjpeg-turbo-progs.deb https://snapshot.debian.org/file/3e449fa1accbd0de93b219e6576847249771b58c && \
        echo "3e449fa1accbd0de93b219e6576847249771b58c  /tmp/libjpeg-turbo-progs.deb" | sha1sum -c - && \
        apt install -y /tmp/libjpeg-turbo-progs.deb ) )
RUN apt update && apt install -y zip
RUN npm install && npm run build

RUN zip -r dist.zip dist
