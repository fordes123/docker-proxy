import { DockerProxy } from '../src/docker-proxy';

export const config = {
	runtime: 'edge'
};

export default function handler(request: Request) {
	const adapter = { env: (key: string) => process.env[key], provide: () => 'vercel' };
	return new DockerProxy(adapter).proxy(request);
}
