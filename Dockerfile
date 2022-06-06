FROM --platform=linux/x86_64 node:17

RUN apt-get update

RUN apt-get install -y vim tmux

WORKDIR /workspace