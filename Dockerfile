FROM node:16.0.0-alpine

WORKDIR /code

CMD ["bin/run"]

ENV \
  WEBSITE_URL='https://dev.pavejs.org' \
  CACHE_CONTROL_MAX_AGE='0' \
  NGINX_VERSION='1.19.7' \
  WATCH='0'

RUN \
  apk add --no-cache curl docker docker-compose jq && \
  curl -L https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl > \
    /usr/local/bin/kubectl && \
  chmod +x /usr/local/bin/kubectl
  apk add --no-cache brotli chromium curl pcre && \
  apk add --no-cache --virtual tmp brotli-dev g++ make pcre-dev zlib-dev && \
  cd /tmp && \
  mkdir nginx ngx_brotli ngx_headers_more && \
  curl -L https://nginx.org/download/nginx-$NGINX_VERSION.tar.gz | \
    tar xz --strip-components 1 -C nginx && \
  curl -L https://github.com/google/ngx_brotli/archive/master.tar.gz | \
    tar xz --strip-components 1 -C ngx_brotli && \
  curl -L https://github.com/openresty/headers-more-nginx-module/archive/master.tar.gz | \
    tar xz --strip-components 1 -C ngx_headers_more && \
  cd nginx && \
  ./configure \
    --with-http_gzip_static_module \
    --add-module=/tmp/ngx_brotli \
    --add-module=/tmp/ngx_headers_more && \
  make && \
  make install && \
  ln -s /usr/local/nginx/sbin/nginx /usr/local/bin/nginx && \
  rm -fr nginx ngx_brotli ngx_headers_more && \
  apk del --purge tmp

COPY \
  bin/build \
  bin/compress \
  bin/docker-build-and-push \
  bin/docker-login \
  bin/kube-login \
  bin/livereload \
  bin/run \
  bin/test \
  /usr/local/bin/

COPY package-lock.json package.json ./
RUN \
  npm install && \
  npm cache clean --force && \
  ln -s /code/src node_modules/src

COPY cogs.js ./
COPY src src

ARG VERSION
RUN test -n "$VERSION"
ENV VERSION=$VERSION

RUN \
  MINIFY=1 bin/build && \
  bin/compress