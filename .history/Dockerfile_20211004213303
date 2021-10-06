FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install -g

COPY . .

EXPOSE 3300

CMD ["npm", "run", "dev"]
