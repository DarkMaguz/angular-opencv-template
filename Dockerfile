FROM node:20
RUN npm install -g npm @angular/cli
RUN npm install -g typescript
EXPOSE 4200
