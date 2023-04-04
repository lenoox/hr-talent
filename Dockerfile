FROM node:lts-bullseye-slim as development
WORKDIR /app

ARG api_url # you could give this a default value as well
ENV API_URL=$api_url

RUN npm install -g npm
COPY package*.json ./
RUN npm ci
COPY . .

FROM node:lts-bullseye-slim as build
WORKDIR /app
RUN npm install -g npm
COPY package*.json ./
COPY --from=development /app/node_modules ./node_modules
COPY . .
RUN npm run build:prod

FROM nginx:stable
COPY --from=build /app/dist/hr-talent /usr/share/nginx/html/
COPY --from=build /app/default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
