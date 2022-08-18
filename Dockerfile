FROM node:lts-alpine
WORKDIR /usr/src/app

COPY . ./

# building the app
RUN npm i --force
RUN npm run build

# Running the app
CMD [ "npm", "start" ]