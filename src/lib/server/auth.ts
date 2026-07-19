import { env } from "$env/dynamic/private";
import { betterAuth } from "better-auth/minimal";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { sveltekitCookies } from "better-auth/svelte-kit";
import { getRequestEvent } from "$app/server";
import { getDb } from "$lib/server/db";

import { anonymous } from "better-auth/plugins"
import { username } from "better-auth/plugins"

const authConfig = {
	secret: env.BETTER_AUTH_SECRET,
	emailAndPassword: {
		enabled: true,
		minPasswordLength: 0,
		autoSignIn: true,
	},
	rateLimit: {
		enabled: true,
		window: 10,
		max: 100,
		storage: "memory"
	},
	plugins: [
		anonymous({
			emailDomainName: "example.com"
		}),
		username({
			displayUsernameValidator: (displayUsername) => {
                // Allow only alphanumeric characters, underscores, and hyphens
                return /^[a-zA-Z0-9_-]+$/.test(displayUsername)
            }
        }),
		sveltekitCookies(getRequestEvent) // make sure this is the last plugin in the array
	]
} satisfies Omit<Parameters<typeof betterAuth>[0], "database">;

export const createAuth = (d1: D1Database) => betterAuth({
	...authConfig,
	database: drizzleAdapter(getDb(d1), { provider: 'sqlite' })
});

/**
* DO NOT USE!
*
* This instance is used by the `better-auth` CLI for schema generation ONLY.
* To access `auth` at runtime, use `event.locals.auth`.
*/
export const auth = createAuth(null!);
