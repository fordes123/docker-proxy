import { DockerProxy } from './docker-proxy.ts';

export default {
	async fetch(request, env, ctx) {
		const adapter = { env: (key: string) => env[key], provide: () => 'workers' };
		return new DockerProxy(adapter).proxy(request);
	}
};
