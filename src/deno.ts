import { DockerProxy } from './docker-proxy.ts';

/**
 * 启动服务
 */
const PORT = 1993;
const PERMISSIONS = {
	net: true,
	env: true
};

const adapter = { get: (key: string) => Deno.env.get(key) };
const handler = new DockerProxy(adapter).fetch;

Deno.serve({ port: PORT, PERMISSIONS }, handler);
