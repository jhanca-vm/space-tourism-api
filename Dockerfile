FROM node:lts-alpine

WORKDIR /space-tourism-api
COPY . .
RUN npm i --production

CMD ["npm", "start"]