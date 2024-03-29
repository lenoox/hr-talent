FROM node:lts-bullseye-slim as build
ARG api_url
ENV API_URL=$api_url

WORKDIR /app
RUN npm install -g npm
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . .
RUN npm run build:prod

FROM nginx:stable
COPY --from=build /app/dist/hr-talent /usr/share/nginx/html/
COPY --from=build /app/certs /etc/ssl/
COPY --from=build /app/default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
