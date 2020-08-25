FROM node:12.14-alpine3.9
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD ["npm", "start"]