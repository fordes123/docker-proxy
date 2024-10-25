const NGINX_TEMPLATE = `<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>

	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>

	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>`;
const SEARCH_INTERFACE_TEMPLATE = `<!DOCTYPE html>
<html>
  <head>
    <title>Docker Hub 镜像搜索</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>:root{--github-fill:#010409;--body-bg:linear-gradient(90deg,#1C90ED 0%,#1D63ED 100%);--button-bg:#1C90ED;--button-bg-hover:#1D63ED;}@media (prefers-color-scheme:dark){:root{--github-fill:#2d2d2d;--body-bg:linear-gradient(90deg,#1D63ED 0%,#002A8C 100%);--button-bg:#0C49C2;--button-bg-hover:#00308D;}}*{box-sizing:border-box;margin:0;padding:0;}body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;margin:0;background:var(--body-bg);padding:20px;}.container{text-align:center;width:100%;max-width:800px;padding:0 20px;margin:0 auto;display:flex;flex-direction:column;justify-content:center;min-height:70vh;}.github-corner{position:fixed;top:0;right:0;z-index:999;}.github-corner svg{fill:var(--github-fill);color:#f0f6fc;position:absolute;top:0;border:0;right:0;width:80px;height:80px;}.github-corner a,.github-corner a:visited{color:#f0f6fc !important;}.github-corner a,.github-corner a:visited{color:transparent !important;text-decoration:none !important;}.github-corner .octo-body,.github-corner .octo-arm{fill:#f0f6fc !important;}.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out;}@keyframes octocat-wave{0%,100%{transform:rotate(0);}20%,60%{transform:rotate(-25deg);}40%,80%{transform:rotate(10deg);}}.logo{margin-bottom:30px;transition:transform 0.3s ease;}.logo:hover{transform:scale(1.05);}.title{color:white;font-size:2em;margin-bottom:10px;text-shadow:0 2px 4px rgba(0,0,0,0.1);}.subtitle{color:rgba(255,255,255,0.9);font-size:1.1em;margin-bottom:30px;}.search-container{display:flex;align-items:stretch;width:100%;max-width:600px;margin:0 auto;height:50px;}#search-input{flex:1;padding:15px 20px;font-size:16px;border:none;border-radius:8px 0 0 8px;outline:none;box-shadow:0 2px 6px rgba(0,0,0,0.1);transition:all 0.3s ease;background:rgba(255,255,255,0.9);backdrop-filter:blur(10px);box-shadow:0 4px 6px rgba(0,0,0,0.1);}#search-input:focus{background:#ffffff;box-shadow:0 4px 12px rgba(0,0,0,0.15);}#search-button{padding:0 25px;border:none;border-radius:0 8px 8px 0;cursor:pointer;transition:all 0.3s ease;height:100%;display:flex;align-items:center;justify-content:center;background-color:var(--button-bg);box-shadow:0 4px 6px rgba(0,0,0,0.1);}#search-button:hover{background-color:var(--button-bg-hover);transform:translateY(-1px);}#search-button svg{width:24px;height:24px;}.tips{color:rgba(255,255,255,0.8);margin-top:20px;font-size:0.9em;}@media (max-width:480px){.container{padding:0 15px;min-height:60vh;}.github-corner svg{width:60px;height:60px;}.github-corner:hover .octo-arm{animation:none;}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out;}.search-container{height:45px;}#search-input{padding:0 15px;}#search-button{padding:0 20px;}.title{font-size:1.5em;}.subtitle{font-size:1em;}}</style>
  </head>
  <body>
    <a href="https://github.com/fordes123/docker-proxy" target="_blank" class="github-corner" aria-label="View source on Github">
      <svg viewBox="0 0 250 250" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
      </svg>
    </a>
    <div class="container">
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" fill="#ffffff" width="120" height="90">
          <path d="M23.763 6.886c-.065-.053-.673-.512-1.954-.512-.32 0-.659.03-1.01.087-.248-1.703-1.651-2.533-1.716-2.57l-.345-.2-.227.328a4.596 4.596 0 0 0-.611 1.433c-.23.972-.09 1.884.403 2.666-.596.331-1.546.418-1.744.42H.752a.753.753 0 0 0-.75.749c-.007 1.456.233 2.864.692 4.07.545 1.43 1.355 2.483 2.409 3.13 1.181.725 3.104 1.14 5.276 1.14 1.016 0 2.03-.092 2.93-.266 1.417-.273 2.705-.742 3.826-1.391a10.497 10.497 0 0 0 2.61-2.14c1.252-1.42 1.998-3.005 2.553-4.408.075.003.148.005.221.005 1.371 0 2.215-.55 2.68-1.01.505-.5.685-.998.704-1.053L24 7.076l-.237-.19Z"></path>
          <path d="M2.216 8.075h2.119a.186.186 0 0 0 .185-.186V6a.186.186 0 0 0-.185-.186H2.216A.186.186 0 0 0 2.031 6v1.89c0 .103.083.186.185.186Zm2.92 0h2.118a.185.185 0 0 0 .185-.186V6a.185.185 0 0 0-.185-.186H5.136A.185.185 0 0 0 4.95 6v1.89c0 .103.083.186.186.186Zm2.964 0h2.118a.186.186 0 0 0 .185-.186V6a.186.186 0 0 0-.185-.186H8.1A.185.185 0 0 0 7.914 6v1.89c0 .103.083.186.186.186Zm2.928 0h2.119a.185.185 0 0 0 .185-.186V6a.185.185 0 0 0-.185-.186h-2.119a.186.186 0 0 0-.185.186v1.89c0 .103.083.186.185.186Zm-5.892-2.72h2.118a.185.185 0 0 0 .185-.186V3.28a.186.186 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.186v1.89c0 .103.083.186.186.186Zm2.964 0h2.118a.186.186 0 0 0 .185-.186V3.28a.186.186 0 0 0-.185-.186H8.1a.186.186 0 0 0-.186.186v1.89c0 .103.083.186.186.186Zm2.928 0h2.119a.185.185 0 0 0 .185-.186V3.28a.186.186 0 0 0-.185-.186h-2.119a.186.186 0 0 0-.185.186v1.89c0 .103.083.186.185.186Zm0-2.72h2.119a.186.186 0 0 0 .185-.186V.56a.185.185 0 0 0-.185-.186h-2.119a.186.186 0 0 0-.185.186v1.89c0 .103.083.186.185.186Zm2.955 5.44h2.118a.185.185 0 0 0 .186-.186V6a.185.185 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.186v1.89c0 .103.083.186.185.186Z"></path>
        </svg>
      </div>
      <h1 class="title">Docker Hub 镜像搜索</h1>
      <p class="subtitle">快速查找、下载和部署 Docker 容器镜像</p>
      <div class="search-container">
        <input type="text" id="search-input" placeholder="输入关键词搜索镜像，如: nginx, mysql, redis...">
        <button id="search-button" title="搜索">
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
      </div>
      <p class="tips">提示：按回车键快速搜索</p></div>
    <script>function performSearch(){const query=document.getElementById('search-input').value.trim();if(query){window.location.href='/search?q='+encodeURIComponent(query)}}document.getElementById('search-button').addEventListener('click',performSearch);document.getElementById('search-input').addEventListener('keypress',function(event){if(event.key==='Enter'){performSearch()}});window.addEventListener('load',()=>{document.getElementById('search-input').focus()});</script>
  </body>
</html>`;
const DEFAULT_HOST = 'registry-1.docker.io';
const DOCKER_AUTH_HOST = 'auth.docker.io';
const DOCKER_HUB_HOST = 'hub.docker.com';
const DOCKER_HUB_URL = 'https://' + DOCKER_HUB_HOST;
const MODELS = ['static', 'redirect', 'proxy'];
const ROUTES = {
	'quay': 'quay.io',
	'gcr': 'gcr.io',
	'k8s-gcr': 'k8s.gcr.io',
	'k8s': 'registry.k8s.io',
	'ghcr': 'ghcr.io',
	'cloudsmith': 'docker.cloudsmith.io',
	'nvcr': 'nvcr.io',
	'docker': DEFAULT_HOST
};

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const headers = request.headers;
		const [model, value] = initEnv(env);


		// 浏览器访问
		if (isBrowser(headers)) {
			console.log(`当前模式 => ${model}, 访问者 => ${headers.get('user-agent')}`);
			switch (model) {
				case 'redirect':
					return Response.redirect(value, 302);

				case 'proxy':

					let _url = new URL(request.url);
					_url.hostname = value;
					return fetch(new Request(_url, request));

				default:

					if (value == 'nginx') {
						return new Response(NGINX_TEMPLATE, { headers: { 'Content-Type': 'text/html; charset=UTF-8' } });
					} else if (value == 'search') {

						if (url.pathname == '/') {
							return new Response(SEARCH_INTERFACE_TEMPLATE, { headers: { 'Content-Type': 'text/html; charset=UTF-8' } });
						} else {

							let _url = new URL(request.url);
							_url.hostname = DOCKER_HUB_HOST;
							return fetch(new Request(_url, request));
						}
					}

					return new Response(value, { headers: { 'Content-Type': 'text/html; charset=UTF-8' } });
			}
		}

		const target = getTarget(url);
		let redirect = 'follow';
		let _url = new URL(request.url);
		let _headers = new Headers(request.headers);

		_url.hostname = target;
		_headers.set('Host', target);

		console.debug(`请求 => ${url.hostname} ` + `${url.pathname}, 目标地址 => ${target}`);

		switch (target) {
			case DEFAULT_HOST:

				// 处理 token 请求
				if (url.pathname.includes('/token')) {

					_url.hostname = DOCKER_AUTH_HOST;
					_headers.set('Host', DOCKER_AUTH_HOST);

					// 处理官方库 scope 参数 e.g. repository:busybox:pull => repository:library/busybox:pull
					const scope = url.searchParams.get('scope');
					if (scope) {
						let scopeParts = scope.split(':');
						if (scopeParts.length == 3 && !scopeParts[1].includes('/')) {
							scopeParts[1] = 'library/' + scopeParts[1];
							_url.searchParams.set('scope', scopeParts.join(':'));
						}
					}

					return fetch(new Request(_url, {
						headers: _headers,
						method: request.method,
						body: request.body,
						redirect: 'follow'
					}), {
						headers: _headers
					});
				}

				// 为官方库请求添加 library/ 前缀 e.g. /v2/busybox/manifests/latest => /v2/library/busybox/manifests/latest
				const pathParts = url.pathname.split('/');
				if (pathParts.length > 3 && pathParts[1] === 'v2' && pathParts[2] !== 'library') {
					pathParts.splice(2, 0, 'library');
					_url.pathname = pathParts.join('/');
				}

				//使用手动重定向
				redirect = 'manual';

				break;

			default:
				break;
		}

		// 发起请求
		const response = await fetch(new Request(_url, {
			headers: _headers,
			redirect: redirect,
			cacheTtl: 3600
		}));

		// 手动重定向
		if (redirect == 'manual' && response.status == 307) {
			const location = new URL(response.headers.get('Location'));
			return await fetch(location.toString(), {
				method: 'GET',
				redirect: 'follow'
			});
		}

		// 重写响应头
		let __headers = new Headers(response.headers);
		if (target == DEFAULT_HOST && __headers.has('www-authenticate')) {
			const authenticate = __headers.get('www-authenticate').replace(DOCKER_AUTH_HOST, url.hostname);
			__headers.set('www-authenticate', authenticate);
		}

		return new Response(response.body, {
			status: response.status,
			headers: __headers
		});
	}
};

function getTarget(url) {
	const prefix = url.hostname.split('.')[0];
	const ns = url.searchParams.get('ns');
	return ROUTES[ns || prefix] || DEFAULT_HOST;
}

function isBrowser(headers) {
	let ua = headers.get('user-agent');
	return ua?.toLowerCase().includes('mozilla');
}

function initEnv(env) {
	let model = MODELS.includes(env.HOME_MODEL) ? env.HOME_MODEL : 'static';
	let value = env.HOME_VALUE;

	if (!value || value.trim() === '') {
		switch (model) {
			case 'static':
				value = 'search';
				break;

			case 'redirect':
				value = DOCKER_HUB_URL;
				break;

			case 'proxy':
				value = DOCKER_HUB_HOST;
				break;
		}
	}

	return [model, value];
}
