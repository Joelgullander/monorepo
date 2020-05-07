# Use a Node.js image and assign it as our build
FROM yurikrupnik/client-apps_lerna AS build
WORKDIR /app
ENV NODE_ENV=development
COPY . .

# RUN apk update && apk upgrade \
#     && apk add --no-cache \
#     bash \
#     git \
#     build-base \
#     openssh \
#     python \
#     python-dev \
#     py-pip \
#     && rm -rf /var/cache/apk/* \
#     && npm install -g yarn


# COPY package.json yarn.lock ./
COPY . .
RUN yarn install
RUN yarn build
RUN yarn link
RUN yarn build-storybook

# COPY .npmrc ./
# RUN npm ci \
#     && npm install lerna -g \
#     && lerna run bootstrap \
#     && npm run mojafa \
#     && cp -R packages/hiab-components/storybook-static ./.storybook/dist

# Copy all files to the working directly, build the application
# and purge the development dependencies
# COPY . .

# Create a new image using a minimal Node.js image
# with no extra tools packaged in, such as Yarn or npm for the smallest final size
FROM mhart/alpine-node:10

# Set the working directory for the new image and
# set the `NODE_ENV` environment variable value to `production`
# along with setting the path for node_modules to be accessible
WORKDIR /usr/src

# Copy files from the base image over to our new image's working directory

COPY --from=build ./app/storybook-static ./dist
CMD npx http-server -p 3000 dist
EXPOSE 3000