FROM node:alpine

WORKDIR /app

# add node binaries
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
# add app
COPY . ./

# install
RUN npm install --silent

EXPOSE 3000
