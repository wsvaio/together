
FROM node:alpine as builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build


FROM node:alpine as prod
WORKDIR /app

COPY --from=builder /app/.output .
EXPOSE 7100

CMD ["node", "server/index.mjs"]




