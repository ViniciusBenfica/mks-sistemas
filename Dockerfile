FROM node:alpine as dev

WORKDIR /app

COPY package*.json /app

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]