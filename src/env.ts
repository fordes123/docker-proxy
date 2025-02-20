export interface EnvAdapter {
  get(key: string): string | undefined;
}

class DenoEnvAdapter implements EnvAdapter {
  get(key: string): string | undefined {
    return Deno.env.get(key);
  }
}

class WorkersEnvAdapter implements EnvAdapter {
  private env: Record<string, string>;

  constructor(env: Record<string, string>) {
    this.env = env;
  }

  get(key: string): string | undefined {
    return this.env[key];
  }
}

export function createEnvAdapter(env?: Record<string, string>): EnvAdapter {
  if (env) {
    return new WorkersEnvAdapter(env);
  }
  return new DenoEnvAdapter();
} 