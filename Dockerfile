ARG NODE_VERSION
FROM node:${NODE_VERSION} as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
COPY . /app
RUN npm run build

FROM nginx:alpine
COPY ./nginx.template /etc/nginx/conf.d/
COPY . /app
COPY --from=build /app/build /app/build