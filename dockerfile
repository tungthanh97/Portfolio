FROM node:16-alpine as BASE

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm \
    && pnpm install --frozen-lockfile \
    && pnpm store prune
  
FROM node:16-alpine as BUILD

WORKDIR /app
COPY --from=BASE /app/node_modules ./node_modules
COPY . .
RUN npm install -g pnpm \
    && pnpm build \
    && rm -rf node_modules \
    && pnpm install --prod --frozen-lockfile

FROM node:16-alpine as PROD

WORKDIR /app

COPY --from=BUILD /app/node_modules ./node_modules
COPY --from=BUILD /app/package.json ./package.json
COPY --from=BUILD /app/.next ./.next
COPY --from=BUILD /app/public ./public
COPY --from=BUILD /app/fonts ./fonts

EXPOSE 3000
CMD ["pnpm", "start"]