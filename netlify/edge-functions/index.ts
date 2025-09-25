import type { Context } from '@netlify/edge-functions';
import { DockerProxy } from '../../src/docker-proxy.ts';

export default async (request: Request, context: Context) => {

	const adapter = { env: (key: string) => Netlify.env.get(key), provide: () => 'netlify' };
	return new DockerProxy(adapter).proxy(request);

};
