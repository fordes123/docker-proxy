import { DockerProxy } from './docker-proxy.ts';

/**
 * 启动服务
 */
const PORT = 1993;
const PERMISSIONS = {
	net: true,
	env: true
};

const adapter = { env: (key: string) => Deno.env.get(key), provide: () => 'deno' };
Deno.serve({ port: PORT, PERMISSIONS }, async (request: Request) => {
	return new DockerProxy(adapter).proxy(request);
});
