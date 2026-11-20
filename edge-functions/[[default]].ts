import { DockerProxy } from '../src/docker-proxy.ts';

type EventContext = {
	request: Request;
	env: Record<string, string | undefined>;
};

export function onRequest({ request, env }: EventContext): Promise<Response> {
	const adapter = { env: (key: string) => env[key], provide: () => 'edgeone' };
	return new DockerProxy(adapter).proxy(request);
}
