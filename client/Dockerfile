FROM node:lts-alpine3.14 as builder

WORKDIR '/app'
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm","run","start"]
