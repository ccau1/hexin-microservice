# base image
FROM node:12.6.0-alpine

ARG PORT

# set working directory
#     move to app folder
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

EXPOSE ${PORT}

# start app
# CMD ["nodemon", "src/server.ts", "--inspect=0.0.0.0:9229 -r tsconfig-paths/register -r ts-node/register/type-check"]



# https://medium.com/@shemleong/using-docker-and-yarn-for-development-2546e567ad2
