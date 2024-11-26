FROM node:20
RUN npm install -g npm @angular/cli
RUN npm install -g typescript
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor | tee /etc/apt/trusted.gpg.d/google.gpg > /dev/null
RUN echo "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/google.gpg] https://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google-chrome.list
RUN sed -i 's/Components: main/Components: main non-free contrib/g' /etc/apt/sources.list.d/debian.sources
RUN apt-get update && apt-get install -y --no-install-recommends google-chrome-stable firefox-esr 
EXPOSE 4200
