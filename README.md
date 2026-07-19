This is an example svelte project which uses betterauth to authenticate with a cloudflare d1 database.

I found that it was extraordinarily frustrating to figure out exactly how to get this thing to build in the cloudflare environment, and by copying me you won't have to suffer.

Hopefully this is a useful example of how to add basic authentication components and reactivity to a svelte site, but also, note that successful cloudflare deployment requires, in /src/hooks.server.ts, the follwing:

```
const handleBetterAuth: Handle = async ({ event, resolve }) => {
	if (building) {
		return resolve(event);
	}
```

This is because while building wrangler will throw a shitfit if it sees `event.platform.env.DB`, presumably because it wants to figure out routing and there's nothing to route to. Frankly the Cloudflare docs leave a lot to be desired here, this is mostly conjecture on my end.

I have not tried to build this locally for about 3 days and at this point I'm not sure how I would even try. Best of luck to you.