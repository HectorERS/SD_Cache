FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Preload dotenv
CMD ["node", "-r", "dotenv/config", "app.js"]

EXPOSE 5000
CMD [ "node", "app.js" ]
