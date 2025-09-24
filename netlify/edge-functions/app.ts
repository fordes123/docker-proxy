import type { Config, Context } from '@netlify/edge-functions';
import { DockerProxy } from '../../src/docker-proxy.ts';
import { NetlifyEnvAdapter } from '../../src/adapter.ts';

export default async (request: Request, context: Context) => {

	let adapter = new NetlifyEnvAdapter();
	const dockerProxy = new DockerProxy(adapter);

	return dockerProxy.fetch(request);

};
