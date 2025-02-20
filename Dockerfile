FROM --platform=${TARGETPLATFORM} denoland/deno:alpine
LABEL maintainer="fordes123 <github.com/fordes123>"

WORKDIR /app

COPY --chown=deno:deno src/*.ts .

EXPOSE 1993
USER deno

CMD ["deno", "run", "--allow-net", "--allow-env", "deno.ts"]
