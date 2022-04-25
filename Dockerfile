# the base image
FROM node:13.12.0-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./

# RUN
RUN npm install

# copy source code
COPY . .

CMD ["npm", "start"]