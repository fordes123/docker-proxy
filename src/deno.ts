import { DockerProxy } from './docker-proxy.ts';
import { DenoAdapter } from './adapter.ts';

/**
 * 启动服务
 */
const PORT = 1993;
const PERMISSIONS = {
	net: true,
	env: true
};

let adapter = new DenoAdapter();
const handler = new DockerProxy(adapter).fetch;

Deno.serve({ port: PORT, PERMISSIONS }, handler);
