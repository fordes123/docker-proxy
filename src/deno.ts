import { handler, registerEnvAdapter } from "./app.ts";
import { createEnvAdapter } from "./env.ts";

/**
 * 启动服务
 */
const PORT = 1993;
const PERMISSIONS = {
	net: true,
	env: true
};

let adapter = createEnvAdapter();
registerEnvAdapter(adapter);

Deno.serve({ port: PORT, PERMISSIONS }, handler);
