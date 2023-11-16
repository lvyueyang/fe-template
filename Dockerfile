# 第一阶段：初始化环境依赖
FROM node:18-alpine as initenv

# 安装Python3和sqlite3依赖
RUN apk add --no-cache make gcc g++ python3

WORKDIR /app

COPY ./packages/client-cms/package.json /app/packages/client-cms/package.json
COPY ./packages/client-cms/yarn.lock /app/packages/client-cms/yarn.lock

COPY ./packages/server/package.json /app/packages/server/package.json
COPY ./packages/server/yarn.lock /app/packages/server/yarn.lock

COPY ./packages/types /app/packages/types

COPY ./lerna.json /app
COPY ./package.json /app
COPY ./yarn.lock /app
COPY ./work.config.json /app

# 安装全部依赖
RUN yarn install --registry https://registry.npmmirror.com

# 第二阶段：编译源码
FROM node:18-alpine as buildercode

WORKDIR /app

COPY --from=initenv /app /app

COPY ./packages /app/packages

# 打包 cms-ui
RUN npm run build:cms
# 打包 server
RUN npm run build:server

# 删除 client-cms
RUN rm -rf /app/packages/client-cms

# 重新安装生产依赖减少构建包体积
RUN yarn install --production --pure-lockfile --registry https://registry.npmmirror.com

# 第二阶段：生产阶段
FROM node:18-alpine

WORKDIR /app

ENV TZ="Asia/Shanghai"

EXPOSE 7004

# 从第一阶段复制仅需的文件
COPY --from=buildercode /app /app

CMD ["npm", "run", "start:prod", "--prefix", "packages/server"]
