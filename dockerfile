FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm run-script build

RUN npm i

EXPOSE 8000

CMD ["npm","run","start"]