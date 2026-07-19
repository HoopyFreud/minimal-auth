<script lang="ts">
	import { Signup } from "$lib/components/auth/sign-up";
	import { Signin } from "$lib/components/auth/sign-in";
	import { Signout } from "$lib/components/auth/sign-out";

	import { authClient } from "$lib/auth-client";

	const session = authClient.useSession(); 
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		This is an auth example
	</h1>
</section>

{#if $session.data}
<section>
	<h2>
		Sign up here:
	</h2>
	<Signup />
</section>

<section>
	<h2>
		Sign in here:
	</h2>
	<Signin />
</section>
{:else}
<section>
	<h2>
		Signed in as {$session.data?.user.displayUsername} <br /> Sign out here:
	</h2>
	<Signout />
</section>
{/if}
<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
