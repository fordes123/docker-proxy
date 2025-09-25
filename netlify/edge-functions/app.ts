import type { Config, Context } from '@netlify/edge-functions';
import { DockerProxy } from '../../src/docker-proxy.ts';
import { NetlifyAdapter } from '../../src/adapter.ts';

export default async (request: Request, context: Context) => {

	let adapter = new NetlifyAdapter();
	const dockerProxy = new DockerProxy(adapter);

	return dockerProxy.fetch(request);

};
