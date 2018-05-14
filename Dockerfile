FROM node:10.0.0-alpine

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

WORKDIR /app
ADD . /app

EXPOSE 5000
EXPOSE 35729

RUN apk --update add vim

ENTRYPOINT ["/bin/sh", "/app/run.sh"]
CMD ["start"]
