# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --strict-peer-dependencies

COPY . .
RUN pnpm build

# Etapa 2: Producción
FROM node:20-alpine AS runner

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --strict-peer-dependencies

COPY --from=builder /app/dist ./dist

EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
