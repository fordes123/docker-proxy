export interface Adapter {
	get(key: string): string | undefined;
}

export class DenoAdapter implements Adapter {
	get(key: string): string | undefined {
		return Deno.env.get(key);
	}
}

export class WorkersAdapter implements Adapter {
	constructor(private readonly env: any) {
	}

	get(key: string): string | undefined {
		return this.env[key];
	}
}

export class NetlifyAdapter implements Adapter {
	get(key: string): string | undefined {
		return Netlify.env.get(key);
	}
}

export class VercelAdapter implements Adapter {
	get(key: string): string | undefined {
		return process.env[key];
	}
}
