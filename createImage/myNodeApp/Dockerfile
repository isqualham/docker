FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

#CMD ["tail", "-f", "/dev/null"]
CMD ["node", "index.js"]
ENTRYPOINT ["node", "index.js"]