import { DockerProxy } from '../src/docker-proxy';

export const config = {
	runtime: 'edge'
};

export default function handler(request: Request) {
	const adapter = { get: (key: string) => process.env[key] };
	return new DockerProxy(adapter).fetch(request);
}
