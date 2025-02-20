import { handler, registerEnvAdapter } from "./app.ts";
import { createEnvAdapter } from "./env.ts";

export interface Env {
    HOME_MODEL?: string;
    HOME_VALUE?: string;
}

export default {
    async fetch(request, env, ctx) {
        let adapter = createEnvAdapter(env);
        registerEnvAdapter(adapter);
        return handler(request);
    }
};
