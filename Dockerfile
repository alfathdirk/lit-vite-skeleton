FROM node:alpine

ARG ENV

COPY . /app

WORKDIR /app

# RUN set -x \
#   && echo "ENV=${ENV}" \
#   && if [ "${ENV}" != "development" ]; then \
#     npm i; \
#     npm run build; \
#     npm cache clean --force; \
#   fi

RUN npm i
RUN npm cache clean --force

CMD [ "npm", "start" ]
