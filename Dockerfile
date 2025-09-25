FROM --platform=${TARGETPLATFORM} denoland/deno:alpine-2.5.0
LABEL maintainer="fordes123 <github.com/fordes123>"

ENV HOME_MODEL=static \
    HOME_VALUE=search

WORKDIR /app

COPY --chown=deno:deno src/deno.ts .
COPY --chown=deno:deno src/docker-proxy.ts .

EXPOSE 1993
USER deno

CMD ["deno", "run", "--allow-net", "--allow-env", "deno.ts"]
