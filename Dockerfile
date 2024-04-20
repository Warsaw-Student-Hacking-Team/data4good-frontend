FROM node:20 as base

RUN mkdir /opt/data4good
WORKDIR /opt/data4good

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY public ./public

COPY src ./src

COPY routes.ts ./

COPY .eslintrc.cjs postcss.config.js routes.ts tailwind.config.ts tsconfig.json vite.config.ts  ./

RUN pnpm run build

CMD ["pnpm", "run", "start"]