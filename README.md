![screenshot](https://github.com/user-attachments/assets/2e50566f-038e-4d4b-8d7d-46ef93ee9d81)
# Docker Proxy

使用 Cloudflare Workers 或 Deno 加速 Docker Registry Mirrors

## 部署

### Cloudflare Workers

> [!WARNING]
> 由于违反 [Cloudflare 协议](https://www.cloudflare.com/zh-cn/terms/) 用户协议存在被封号的风险。
> 请务必限制访问范围，不要用于搭建公开或公共镜像站点

Fork 本仓库并在 [Cloudflare Workers](https://dash.cloudflare.com/) 中导入，或者点击下方按钮一键部署

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/fordes123/docker-proxy)

### Deno

Fork 本仓库并在 [Deno](https://dash.deno.com/new_project) 中导入，`Entrypoint` 选择为 `./src/deno.ts`

### Docker

> [!TIP]
> 基于 `denoland/deno:alpine` 构建，需搭配 Web 服务器使用

#### docker-compose

```shell
services:
  docker-proxy:
    image: fordes123/docker-proxy:latest
    container_name: docker-proxy
    environment:
      HOME_MODEL: static
      HOME_VALUE: search
    ports:
      - 1993:1993
    restart: unless-stopped
```

#### docker cli

```shell
docker run -d \
  --name docker-proxy \
  --restart unless-stopped \
  --env HOME_MODEL='static' \
  --env HOME_MODEL='search' \
  -p 1993:1993 \
  fordes123/docker-proxy:latest
```

## 路由说明

### 域名匹配

根据自定义域名前缀匹配对应镜像源，如 `docker.example.org` 对应 `registry-1.docker.io`，`gcr.example.org` 对应 `gcr.io`

### 参数匹配

通过 URL 参数 `ns` 替代域名前缀，如 `docker.example.org?ns=gcr` 对应 `gcr.io`，故参数匹配优先于域名匹配

| 前缀         | 镜像源                  |
|------------|----------------------|
| quay       | quay.io              |
| gcr        | gcr.io               |
| k8s-gcr    | k8s.gcr.io           |
| k8s        | registry.k8s.io      |
| ghcr       | ghcr.io              |
| cloudsmith | docker.cloudsmith.io |
| nvcr       | nvcr.io              |
| docker     | registry-1.docker.io |

## 环境变量

| 变量名        | 示例       | 必填 | 备注                                                                                                                                                              |
|------------|----------|----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HOME_MODEL | `static` | 🚫 | 模式，可选 redirect (重定向)、proxy (代理)、static (静态内容，默认值)                                                                                                               |
| HOME_VALUE | `search` | 🚫 | `redirect` 模式：重定向的 URL 地址，默认为 `https://hub.docker.com`<br/>`proxy` 模式：代理域名，默认值为 `hub.docker.com`<br/>`static` 模式：任意静态文本内容，内置 `nginx` 和 `search` 两个预设，默认为 search |

## 致谢

本项目修改自 [cmliu/CF-Workers-docker.io](https://github.com/cmliu/CF-Workers-docker.io)、[ciiiii/cloudflare-docker-proxy](https://github.com/ciiiii/cloudflare-docker-proxy)
，感谢原项目各位作者的贡献。
