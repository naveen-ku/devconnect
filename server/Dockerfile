FROM node:lts-alpine3.14

WORKDIR '/app'
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm","run","server"]

