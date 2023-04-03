#imagen con la que vamos a trabajar
FROM node:lts-alpine as build-stage 
#creamos una carpeta app
RUN mkdir app
#cual es el directorio de trabajo
WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.21.6-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]