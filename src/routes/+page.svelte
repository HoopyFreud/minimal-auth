<script lang="ts">
	import { Signup } from "$lib/components/auth/sign-up"
	import { Signin } from "$lib/components/auth/sign-in"
	import { Signout } from "$lib/components/auth/sign-out"
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

<section>
	<h2>
		Sign out here:
	</h2>
	<Signout />
</section>

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
