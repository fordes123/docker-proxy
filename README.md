![screenshot](https://github.com/user-attachments/assets/2e50566f-038e-4d4b-8d7d-46ef93ee9d81)

# Docker Proxy

无服务器自建 Docker Registry 镜像代理，支持 Cloudflare Workers、Deno、Netlify、EdgeOne Makers 和 Docker 部署。

> [!WARNING]
> 代理行为可能违反 Cloudflare、Deno 等平台用户协议，存在被封号的风险。
> 请务必限制访问范围，或通过环境变量设置合理的伪装策略。**不建议用于搭建公开或公共镜像站点。**

## 🚀 快速部署

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/fordes123/docker-proxy)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/fordes123/docker-proxy)
[![Deploy to EdgeOne](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?repository-url=https%3A%2F%2Fgithub.com%2Ffordes123%2Fdocker-proxy)

点击上方按钮进行一键部署，亦可以 fork 本仓库后手动导入对应平台。

## 💪 自托管

> [!TIP]
> 基于 `denoland/deno:alpine` 构建，需搭配 Web 服务器使用。

#### Docker Compose

```yaml
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

#### Docker CLI

```shell
docker run -d \
  --name docker-proxy \
  --restart unless-stopped \
  --env HOME_MODEL='static' \
  --env HOME_VALUE='search' \
  -p 1993:1993 \
  fordes123/docker-proxy:latest
```

## 📡 路由说明

### 域名匹配规则

根据自定义域名前缀自动匹配对应镜像源：

| 域名前缀           | 对应镜像源                  |
|----------------|------------------------|
| `docker.*`     | `registry-1.docker.io` |
| `gcr.*`        | `gcr.io`               |
| `quay.*`       | `quay.io`              |
| `k8s-gcr.*`    | `k8s.gcr.io`           |
| `k8s.*`        | `registry.k8s.io`      |
| `ghcr.*`       | `ghcr.io`              |
| `cloudsmith.*` | `docker.cloudsmith.io` |
| `nvcr.*`       | `nvcr.io`              |

### 参数匹配规则

通过 URL 参数 `ns` 指定镜像源（优先级高于域名匹配）：

- `your-domain.com?ns=gcr` → `gcr.io`
- `your-domain.com?ns=quay` → `quay.io`

## ⚙️ 环境变量配置

| 变量名          | 必填 | 默认值      | 说明                                                                                                                                               |
|--------------|----|----------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `HOME_MODEL` | ❌  | `static` | 浏览器访问时的策略 <br/>- `redirect`：重定向<br/>- `proxy`：代理<br/>- `static`：静态内容                                                                             |
| `HOME_VALUE` | ❌  | `search` | 策略对应值 <br/>- `redirect`：重定向目标 URL (`https://hub.docker.com`)<br/>- `proxy`：代理域名 (`hub.docker.com`)<br/>- `static`：静态文本内容 (预设 `nginx`、`search`) |

## 🙏 致谢

本项目基于以下项目修改而来，感谢各位作者的贡献

- [cmliu/CF-Workers-docker.io](https://github.com/cmliu/CF-Workers-docker.io)
- [ciiiii/cloudflare-docker-proxy](https://github.com/ciiiii/cloudflare-docker-proxy)
