# Build
FROM node:20-alpine AS builder

WORKDIR /app

RUN apk add --no-cache python3 make g++ vips-dev && rm -rf /var/cache/apk/*

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

RUN pnpm prune --prod

# Producción
FROM node:20-alpine AS runner

WORKDIR /app

RUN apk add --no-cache vips

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
