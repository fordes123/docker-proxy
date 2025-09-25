import type { Context } from '@netlify/edge-functions';
import { DockerProxy } from '../../src/docker-proxy.ts';

export default async (request: Request, context: Context) => {

	const adapter = { get: (key: string) => Netlify.env.get(key) };
	return new DockerProxy(adapter).fetch(request);

};
