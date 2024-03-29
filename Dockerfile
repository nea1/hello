FROM node:13-alpine

COPY package*.json ./
RUN npm install
COPY index.js .
ENV NODE_EXTRA_CA_CERTS /var/run/secrets/kubernetes.io/serviceaccount/ca.crt

ENTRYPOINT [ "npm", "start" ]