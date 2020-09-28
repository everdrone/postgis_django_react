FROM node:alpine

WORKDIR /app

# add node binaries
ENV PATH /app/node_modules/.bin:$PATH

# install
COPY package.json ./
RUN npm install --silent

# add app
COPY . ./

EXPOSE 3000
