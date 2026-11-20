// HTML templates
export const NGINX_TEMPLATE = `<!DOCTYPE html><html><head><title>Welcome to nginx!</title><style>body{width:35em;margin:0 auto;font-family:Tahoma,Verdana,Arial,sans-serif}</style></head><body><h1>Welcome to nginx!</h1><p>If you see this page,the nginx web server is successfully installed and working.Further configuration is required.</p><p>For online documentation and support please refer to <a href="http://nginx.org/">nginx.org</a>.<br/>Commercial support is available at <a href="http://nginx.com/">nginx.com</a>.</p><p><em>Thank you for using nginx.</em></p></body></html>`;
export const SEARCH_TEMPLATE = `<!doctype html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="description" content="Docker Hub 镜像搜索">
	<title>Docker Hub镜像搜索</title>
	<link rel="icon" href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAACXBIWXMAAAsSAAALEgHS3X78AAAFAElEQVR42u1cO5LbOBB9ZimXbiA5YSr6BGbAfJQxNH0Ca04wnBOsbmBOyEzKWbXUCUxlLkbSDaQq57PBtmws1PjwO+RoUYUEQ4ro168/aADz4fX1FX00NwhnADzqM82jZwAFgKLM0nMfc/vQFQgk9AqAT31e42dOAHLq265AaR0ENwgjEv6hg/nuCIxkcCCQ1tcAopoar8OQBMCmDXY0BoE0vwEwrfDaXvM3r8JvXQCsmzKjNghuEHqkjaXh0YNg17mN5ohZvtBtvhGVWVr0BoIbhGsAfxk0dKXrsQVzWwjmpmPJY5mlm05BIA0lGqd3AhC37bgY84s1vmdHrDi3DgIBkCuoeSGtx+ipuUEYEzumCvPwbYGwAsEAwJ6QP6LnRmaSAPjcBAgjCAYAnvvUvoEVT3WB0IKgAaCV0NSBr+BCtREIx/DbiQIAf0gAAADNx6f5iW1JcqAyCBQGHxQAFBhgo3lxQDyQPPbmQInQD+b5r0NjgMY0vjN/+sQpcKIxA84JJi1PNJKGizJL122YBkWOJ0Yuz2gONDnZD+w7iAILCm1i91o0jZhZoyxJPjUIFA02jB+IMM4WMf5hQ3IqmcBlYJu3SIRaYsORUeqU5FSCIGv8NIRkqAWzOOnknEi+QF6UWANAjmghDZ+pc+MJJWLyeBctlqLF3A3C6Oroxeiwkn1BxWgQMd54T4JWGfe7SKTcIJSzydU1CjqCQ3ywCJNDygUWbhCead1g0xImgZqJPmHFvLQZuLnHpNknNwhtFMbJsxJBkCl4GHJEIP/zRRj6QnQ3RYqDNOyLPkEGIa8xN+6dI/Uq4zaNY+43Nwi3ZZbmhjkub0Agu5jbgqBKd6n7zDiqjFum0zONczaB8E2KErOJIlXNLdJdMOGty/EbGnPjjKPcCosmTi6PBaGvPcAGrVAANWfC7pMbhL9L8m4Q3oDgMNTajyARrFrPWArKluWbORhn21Z8/qRL/CaWIUm0wZ8AHqVHflHvbFyYw3W3+wL77TrtKnjC5PVcTP57pIy5kC/ITSCYYvNihMLvyWQSGyc/wftpL2WW1ir+OO8IhNp1D4dZw3tSzpCPhAW2KbecX5wdJuZO5Rocbut0Q3N+Vixg5AKAwlEkHm0sqPpqVWqgPgsCec/TSEGouhXgM0nU2VEI6TfM0Poyg1XFd1jlqkBYUpIkFiReBgaAX2WhR/IsdSBwml63FYI6AqDqImqtWoM4wtJ5p8u3iQ3PIwWAWz/srkxyNHY/lfftyAkd3giAAwCvDgAkx1Tl5xxBwISJErHCufQNxHOZpV6D4m+sW1rLabO85p7L5SqikN9T8eUFwMcmW4E0/7lOzv8c0qCM6ihR50I0PDIfWONP/b9Nu9/i3/OQxyY/RBGhYORZiJHFYbQse9EpFLtRdHp0QUWQU0PBXwB8pQm2dSQwYRS0lkOr6rhOwcRU43E9Qt7Hn8sdqnakfr3ccWzbjhTH+g5llt7M6/8zS6p6Aj34yC1WCKAhA+CB33d8VIVX02HOLUZ0jI8AyBk/sCuzdFW3shQxOcEUQM4dgBqACXAAHGCoNmtBEHICDojvFc4GdA1ATD6g8pFeozlI+UOOd3rK3arQqmEEaAJF36yg7xVNAbBmgsSIBPd684VJl+/zDhQTjhLc6204hp5V7kVeoN9a/1zh8297L5LR3P3ekFUw4/7uSmvYcZ+35g2gDPL/J/wDgzLhZD6cTicAAAAASUVORK5CYII=">
	<style>
		:root {
			--body-bg: #f7f7f7;
			--button-bg: #1d63ed;
			--button-bg-hover: #0c49c2;
			--github-fill: #010409;
			--tip-color: #8993a5;
			--logo-color: var(--button-bg);
			--shadow: 0 2px 6px rgba(0, 0, 0, .1);
			--focus-shadow: 0 4px 12px rgba(0, 0, 0, .15);
		}

		@media (prefers-color-scheme: dark) {
			:root {
				--body-bg: #242424;
				--github-fill: #000;
				--tip-color: #c4c8d1;
				--logo-color: #fff;
				--shadow: 0 2px 6px rgba(255, 255, 255, .1);
				--focus-shadow: 0 4px 12px rgba(200, 200, 200, .1);
			}
		}

		* { box-sizing: border-box; }
		body, h1, p { margin: 0; }

		body {
			display: grid;
			place-items: center;
			min-height: 100vh;
			min-height: 100svh;
			padding: 20px;
			background: var(--body-bg);
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
		}

		main {
			width: min(100%, 800px);
			padding-inline: 20px;
			text-align: center;
		}

		.logo {
			width: 24rem;
			max-width: 100%;
			height: 8rem;
			color: var(--logo-color);
		}

		.github-corner {
			position: fixed;
			top: 0;
			right: 0;
			z-index: 1;
			color: #f0f6fc;
		}

		.github-corner svg {
			display: block;
			width: 80px;
			height: 80px;
			fill: var(--github-fill);
		}

		.octo-arm { transform-origin: 130px 106px; }

		form {
			display: flex;
			width: min(100%, 600px);
			height: 50px;
			margin-inline: auto;
			border-radius: 8px;
		}

		form:focus-within { box-shadow: var(--focus-shadow); }
		input, button { border: 0; box-shadow: var(--shadow); }

		input {
			flex: 1;
			min-width: 0;
			padding-inline: 20px;
			border-radius: 8px 0 0 8px;
			outline: none;
			background: #fff;
			font-size: 16px;
		}

		button {
			display: grid;
			flex-shrink: 0;
			place-items: center;
			padding-inline: 25px;
			border-radius: 0 8px 8px 0;
			background: var(--button-bg);
			cursor: pointer;
		}

		button:hover { background: var(--button-bg-hover); }
		button svg { width: 24px; height: 24px; }
		.tips { margin-top: 20px; color: var(--tip-color); font-size: .9em; }

		@media (max-width: 480px) {
			main, input { padding-inline: 15px; }
			form { height: 45px; }
			button { padding-inline: 20px; }
			.github-corner svg { width: 60px; height: 60px; }
		}

		@media (hover: hover) and (prefers-reduced-motion: no-preference) {
			.logo { transition: transform .3s ease; }
			.logo:hover { transform: scale(1.05); }
			.github-corner:hover .octo-arm { animation: octocat-wave 560ms ease-in-out; }
		}

		@keyframes octocat-wave {
			0%, 100% { transform: rotate(0); }
			20%, 60% { transform: rotate(-25deg); }
			40%, 80% { transform: rotate(10deg); }
		}
	</style>
</head>
<body>
	<a class="github-corner" href="https://github.com/fordes123/docker-proxy" target="_blank" rel="noopener" aria-label="查看 GitHub 源码">
		<svg viewBox="0 0 250 250" aria-hidden="true">
			<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
			<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm"></path>
			<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
		</svg>
	</a>
	<main>
		<h1>
			<svg class="logo" role="img" aria-label="Docker Hub" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 786.504384072 100">
				<g transform="scale(0.131964)" fill="currentColor">
				<path d="M1077.76,0c-75.81,0-137.27,61.46-137.27,137.27C940.48,61.46,879.02,0,803.21,0h-173.98v110.51c0,84.77,68.72,153.49,153.49,153.49h86.97v82.26h-84.37c-131.59,0-238.28-106.66-238.28-238.25V0H223.46C100.04,0,0,100.03,0,223.43v307.8c0,123.4,100.04,223.43,223.46,223.43h561.87c123.42,0,223.46-100.03,223.46-223.43v-267.23h89.46c84.77,0,153.49-68.72,153.49-153.49V0h-173.98Z"/>
				<path d="M2891.78,191.16c44.39,0,84.08,8.1,119.05,24.31,34.96,16.21,63.04,39.06,84.18,68.55,21.14,29.49,33.53,63.41,37.17,101.73l.07.9h-121.35l-.15-.66c-5.03-24.76-17.99-45.16-38.89-61.19-20.88-16.01-47.92-24.06-81.17-24.06-27.08,0-51.29,6.42-72.62,19.24l-4.24,2.65c-21.63,13.85-38.23,33.92-49.79,60.22-11.56,26.3-17.36,57.03-17.36,92.18s5.79,65.86,17.35,92.17l2.35,4.86c12.03,23.93,27.84,42.38,47.44,55.36l4.09,2.52c20.67,12.18,44.2,18.27,70.61,18.27,21.68,0,41.17-3.65,58.48-10.95,18.02-8.02,32.42-19.32,43.22-33.87h0c11.54-15.32,19.1-32.47,22.71-51.43l.12-.66h121.42l-.13.93c-5.09,36.83-18.21,71.1-39.32,102.77h0c-21.14,30.97-49.93,56.02-86.33,75.17-35.7,18.42-76.86,27.62-123.44,27.62-52.39,0-98.65-12.15-138.72-36.46h0c-39.34-24.32-69.57-57.47-90.69-99.46-21.11-42.71-31.66-91.31-31.66-145.75s10.91-104.14,32.76-146.85c22.57-43.45,54.26-77.34,95.05-101.65,40.79-24.31,87.41-36.46,139.81-36.46Z"/>
				<path fill-rule="evenodd" d="M2298.29,187.75c53.11,0,100.45,11.78,141.97,35.35,41.52,23.57,73.94,57.09,97.24,100.54,23.3,42.72,34.94,92.05,34.94,147.97s-11.64,104.51-34.94,147.96h0c-23.31,42.72-55.73,75.88-97.23,99.45-41.52,23.57-88.86,35.35-141.97,35.35s-101.54-11.77-143.07-35.35c-41.51-23.57-73.93-56.72-97.23-99.44-22.57-42.72-33.85-92.06-33.86-147.97,0-55.91,11.28-105.25,33.86-147.97,23.3-43.45,55.72-76.97,97.23-100.54,41.52-23.57,89.21-35.35,143.07-35.35ZM2298.29,297.33c-29.63,0-55.97,7.3-79.05,21.9h-.02c-23.08,13.87-41.13,34.29-54.13,61.33-12.28,26.3-18.44,56.65-18.44,91.06s6.15,64.74,18.43,91.04c13,26.3,31.04,46.74,54.13,61.34l4.37,2.51c22.02,12.19,46.92,18.29,74.7,18.29,29.62,0,55.6-6.94,77.97-20.8,23.09-14.59,40.76-35.03,53.05-61.32v-.02c13.01-26.3,19.52-56.64,19.52-91.04s-6.51-64.75-19.51-91.05v-.02c-12.29-27.03-29.98-47.45-53.05-61.31l-.02-.02c-22.37-14.59-48.34-21.89-77.95-21.89Z"/>
				<path fill-rule="evenodd" d="M3939.56,187.75c78.59,0,140.89,24.29,186.81,72.94,45.91,48.64,68.83,114.21,68.83,196.6,0,8.1-.37,16.57-1.1,25.4,0,8.84-.73,18.4-2.18,28.68l-.1.71h-392.57c1.53,26.51,7.16,49.6,16.9,69.29,11.55,23.34,28.48,41.2,50.83,53.6l4.23,2.12c21.43,10.26,46.38,15.41,74.88,15.41s53.46-5.85,73.63-17.51c20.17-12.39,34.94-29.5,44.3-51.37l.22-.51h122.55l-.35,1.09c-11.65,35.33-28.38,65.9-50.25,91.68-21.14,25.07-47.74,44.59-79.8,58.59h-.02c-32.06,13.27-68.83,19.89-110.29,19.89-53.12,0-99.73-11.78-139.81-35.36-39.34-23.58-69.94-56.74-91.79-99.46-21.84-43.45-32.75-93.88-32.75-151.25s10.54-105.96,31.65-147.95h0c21.85-42.72,52.09-75.51,90.7-98.36,39.35-22.84,84.5-34.25,135.45-34.25ZM3939.56,285.21c-28.92,0-54.18,6.21-75.82,18.61h0c-20.91,11.67-37.13,28.45-48.67,50.34-9.31,18.81-14.6,40.06-15.91,63.77h275.7v-3.58c0-38.73-11.91-69.71-35.68-93.02h0c-23.77-24.04-56.93-36.11-99.6-36.11Z"/>
				<path fill-rule="evenodd" d="M1959.72,738.94h-105.1v-49.28h-14.7c-2.85,3.22-5.83,6.36-8.96,9.4-18.24,17.71-40.85,31.36-67.81,40.94h0c-26.23,9.57-54.99,14.36-86.29,14.36-48.66,0-91.89-11.06-129.65-33.19l-3.64-2.17c-37.89-23.58-67.4-56.74-88.51-99.46-21.12-42.72-31.67-92.04-31.67-147.94s10.55-105.23,31.67-147.95c21.11-43.44,50.62-76.97,88.51-100.55,38.62-23.58,83.06-35.36,133.29-35.36,29.84,0,57.16,4.41,81.94,13.26,25.51,8.85,47.03,21.12,64.54,39.83.92.9,1.83,1.81,2.73,2.72h14.39V0h119.25v738.94ZM1695.36,297.3c-29.62,0-55.6,7.31-77.95,21.9h-.02c-22.36,13.86-40.04,34.29-53.05,61.34-12.27,26.3-18.43,56.65-18.43,91.06s6.15,64.74,18.43,91.04c13,26.3,30.69,46.74,53.05,61.34l4.23,2.52c22.36,12.18,48.34,18.28,77.97,18.28,27.1,0,51.31-6.1,72.66-18.28l4.23-2.52c22.36-14.59,39.67-35.03,51.96-61.32v-.02c13.01-26.3,19.52-56.64,19.52-91.04s-6.51-64.75-19.51-91.05v-.02c-12.29-27.04-29.61-47.47-51.96-61.32h-.02c-22.36-14.6-48.34-21.9-77.97-21.9Z"/>
				<path d="M3311.75,0v393.68h69.56l166.36-190.25.25-.28h147l-1.17,1.36-208.52,242.11,209.5,292.32h-143.59l-.26-.35-169.63-234.24h-69.51v234.58h-118.17V0h118.17Z"/>
				<path d="M4368.07,242.9h14.58c7.22-9.7,15.82-17.93,26.2-24.23h.02c9.55-5.58,22.34-9.43,35.98-11.89,13.64-2.46,28.19-3.54,41.3-3.54l98.64-.09v106.27h-111.9c-20.95,0-38.22,4.02-51.86,12-13.63,7.98-23.68,19.59-30.15,34.86-6.47,15.29-9.73,34.26-9.73,56.95v325.71h-118.17V203.15h105.09v39.75Z"/>
				</g>
				<rect x="650.5298275" y="29.3947335" width="132.839050072" height="64.514007" rx="15.3085325" stroke="currentColor" stroke-width="6.271013"/>
				<text x="667.769287" y="78.203654" font-size="48.822528" font-weight="500" textLength="98.20651507199999" lengthAdjust="spacing" fill="currentColor">HUB</text>
			</svg>
		</h1>
		<form action="/search">
			<input id="search-input" name="q" aria-label="镜像关键词" placeholder="输入关键词搜索镜像，如: nginx, mysql, redis..." autofocus required>
			<button type="submit" title="搜索" aria-label="搜索">
				<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
			</button>
		</form>
		<p class="tips">提示：按回车键快速搜索</p>
	</main>
	<script>
		const input = document.getElementById('search-input');
		input.form.addEventListener('submit', event => {
			event.preventDefault();
			const query = input.value.trim();
			if (query) window.location.href = '/search?q=' + encodeURIComponent(query);
		});
	</script>
</body>
</html>`;

// Constants
export const DOCKER_AUTH_HOST = 'auth.docker.io';
export const DOCKER_HUB_URL = 'https://hub.docker.com';

// Models
export const HOME_MODELS = ['static', 'redirect', 'proxy'] as const;
type HomeModel = typeof HOME_MODELS[number];

// Routes
export const REGISTRY_ROUTES: Record<string, string> = {
	'quay': 'https://quay.io',
	'gcr': 'https://gcr.io',
	'k8s-gcr': 'https://k8s.gcr.io',
	'k8s': 'https://registry.k8s.io',
	'ghcr': 'https://ghcr.io',
	'cloudsmith': 'https://docker.cloudsmith.io',
	'nvcr': 'https://nvcr.io',
	'docker': 'https://registry-1.docker.io'
};

export abstract class Adapter {

	abstract env(key: string): string | undefined;
	provide() {
		return 'default'
	}
}

export class DockerProxy {
	constructor(private readonly adapter: Adapter) {
	}

	proxy = async (request: Request): Promise<Response> => {
		const url = new URL(request.url);
		const headers = new Headers(request.headers);
		return  this.isBrowserRequest(headers) ? this.handleBrowserRequest(request, url) : this.handleDockerRequest(request, url, headers);
	};

	private async handleBrowserRequest(request: Request, url: URL): Promise<Response> {
		const [model, value] = this.getHomeConfig();

		console.debug(`Browser Request: ${url.hostname}${url.pathname}`);
		console.debug(`Current mode: ${model}, User-Agent: ${request.headers.get('user-agent')}`);

		switch (model) {
			case 'redirect':
				return Response.redirect(value, 302);

			case 'proxy':
				return fetch(new Request(this.copyURL(url, value), request));

			default:

				const headers = { 'Content-Type': 'text/html; charset=UTF-8' };
				switch (value) {

					case 'nginx':
						return new Response(NGINX_TEMPLATE, { headers: headers });

					case 'search':
						if (url.pathname === '/') {
							return new Response(SEARCH_TEMPLATE, { headers: headers });
						}
						// Proxy to Docker Hub for search results
						const proxyUrl = this.copyURL(url, DOCKER_HUB_URL);
						return fetch(new Request(proxyUrl, request));

					default:

						return new Response(value, { headers: headers });
				}

		}
	}

	private async handleDockerRequest(request: Request, url: URL, headers: Headers): Promise<Response> {
		const [registryKey, targetUrl] = this.getTargetRegistry(url);

		console.debug(`Pull Request: ${url.hostname}${url.pathname}`);
		console.debug(`Target: ${registryKey}, User-Agent: ${request.headers.get('user-agent')}`);

		if (registryKey === 'docker') {
			return this.handleDockerRegistry(request, url, headers, targetUrl);
		}

		// Handle other registries
		headers.set('Host', targetUrl.hostname);
		return fetch(new Request(targetUrl, { headers }));
	}

	private async handleDockerRegistry(request: Request, url: URL, headers: Headers, targetUrl: URL): Promise<Response> {
		// Handle token requests
		if (url.pathname.includes('/token')) {
			return this.handleTokenRequest(request, url);
		}

		// Add library/ prefix for official Docker images
		this.normalizeDockerPath(targetUrl);

		headers.set('Host', targetUrl.hostname);
		const response = await fetch(new Request(targetUrl, {
			headers,
			redirect: 'manual'
		}));

		return this.handleDockerResponse(request, response, url);
	}

	private async handleTokenRequest(request: Request, url: URL): Promise<Response> {
		url.hostname = DOCKER_AUTH_HOST;

		// Fix official repository scope
		const scope = url.searchParams.get('scope');
		if (scope) {
			const [type, repo, permission] = scope.split(':');
			if (type && repo && permission && !repo.includes('/')) {
				url.searchParams.set('scope', `${type}:library/${repo}:${permission}`);
			}
		}

		const tokenRequest = new Request(url, request);
		tokenRequest.headers.set('Host', DOCKER_AUTH_HOST);
		return fetch(tokenRequest);
	}

	private normalizeDockerPath(url: URL): void {
		const originalPath = url.pathname;
		const pathParts = originalPath.split('/');
		// Transform /v2/busybox/manifests/latest -> /v2/library/busybox/manifests/latest
		if (pathParts.length === 5 && pathParts[1] === 'v2' && pathParts[2] !== 'library') {
			pathParts.splice(2, 0, 'library');
			url.pathname = pathParts.join('/');
			console.debug(`Normalized path: ${originalPath} -> ${url.pathname}`);
		}
	}

	private async handleDockerResponse( request: Request, response: Response, originalUrl: URL): Promise<Response> {
		// Handle redirects
		if (response.status === 307) {
			const location = response.headers.get('Location');
			if (location) {
				return fetch(location, { redirect: 'follow' });
			}
		}

		// Fix authentication headers
		if (response.headers.has('www-authenticate')) {

			const headers = new Headers(response.headers);
			let authenticate = headers.get('www-authenticate');
			headers.set('www-authenticate', authenticate.replace(DOCKER_AUTH_HOST, originalUrl.hostname));

			return new Response(response.body, {
				status: response.status,
				statusText: response.statusText,
				headers,
			});
		}

		return response;
	}

	private getHomeConfig(): [HomeModel, string] {
		const model = this.adapter.env('HOME_MODEL') || 'static';
		let value = this.adapter.env('HOME_VALUE') || '';

		const validModel = HOME_MODELS.includes(model as HomeModel) ? model as HomeModel : 'static';

		if (!value.trim()) {
			const defaultValues: Record<HomeModel, string> = {
				'static': 'search',
				'redirect': DOCKER_HUB_URL,
				'proxy': DOCKER_HUB_URL
			};
			value = defaultValues[validModel];
		}

		return [validModel, value];
	}

	private getTargetRegistry(url: URL): [string, URL] {
		const parts = url.hostname.split('.');
		const namespace = url.searchParams.get('ns');

		let key: string;
		if (namespace) {
			key = namespace;
			console.debug(`Request Host -> ${url.hostname} Matched NS -> ${key}`)
		} else if (parts.length > 2) {
			key = parts[0];
			console.debug(`Request Host -> ${url.hostname} Matched Subdomain -> ${key}`)
		} else {
			key = 'docker';
			console.debug(`Request Host -> ${url.hostname} Matched Default -> ${key}`)
		}

		const registryKey = REGISTRY_ROUTES[key] ? key : 'docker';
		const registryUrl = REGISTRY_ROUTES[registryKey];
		return [registryKey, this.copyURL(url, registryUrl)];
	}

	private copyURL(source: URL, targetBase: string): URL {
		const target = new URL(targetBase);
		target.pathname = source.pathname;

		source.searchParams.forEach((value, key) => {
			target.searchParams.set(key, value);
		});

		return target;
	}

	private isBrowserRequest(headers: Headers): boolean {
		const userAgent = headers.get('user-agent')?.toLowerCase() || '';
		return userAgent.includes('mozilla');
	}
}
