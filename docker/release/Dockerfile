ARG NPM_TOKEN
ARG PORT

###############################################################################
# Step 1 : Builder image
#

# build environment
FROM node:12.6.0-alpine as builder

ARG NPM_TOKEN
ARG PORT

# add prerequisites
RUN apk update && apk add bash

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY docker/.docker_npmrc /usr/src/app/.npmrc
COPY package.json /usr/src/app/package.json
COPY yarn* /usr/src/app/
RUN yarn install --frozen-lockfile --silent --only=production
COPY . /usr/src/app
RUN yarn build

###############################################################################
# Step 2 : Run image
#

FROM node:12.6.0-alpine
ARG NPM_TOKEN
ARG PORT
ENV NODE_ENV=production
WORKDIR /usr/src/app

# Copy builded source from the upper builder stage
COPY --from=builder /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=builder /usr/src/app/dist /usr/src/app/dist

# Expose ports (for orchestrators and dynamic reverse proxies)
EXPOSE ${PORT}

# Start the app
CMD ["node", "/usr/src/app/dist/server.js"]
