import { DockerProxy } from './docker-proxy.ts';
import { WorkersAdapter } from './adapter.ts';

export default {
	async fetch(request, env, ctx) {
		let adapter = new WorkersAdapter(env);
		const dockerProxy = new DockerProxy(adapter);
		return dockerProxy.fetch(request);
	}
};
