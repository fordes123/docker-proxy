# docker-proxy

使用 Cloudflare Workers 加速 Docker Registry Mirrors

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/fordes123/docker-proxy)

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
