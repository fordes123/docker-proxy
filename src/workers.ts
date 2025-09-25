import { DockerProxy } from './docker-proxy.ts';

export default {
	async fetch(request, env, ctx) {
		const adapter = { get: (key: string) => env[key] };
		return new DockerProxy(adapter).fetch(request);
	}
};
