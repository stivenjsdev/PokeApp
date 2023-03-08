FROM node:14.18.1-alpine

WORKDIR /pokeapp

#COPY ["package.json", "yarn.lock", "./"]
COPY [".", "."]

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "run", "start" ]