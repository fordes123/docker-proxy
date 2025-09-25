import { DockerProxy } from '../src/docker-proxy';
import { VercelAdapter } from '../src/adapter';

export const config = {
	runtime: 'edge'
};

export default function handler(req: Request) {
	let adapter = new VercelAdapter();
	const dockerProxy = new DockerProxy(adapter);
	return dockerProxy.fetch(req);
}
