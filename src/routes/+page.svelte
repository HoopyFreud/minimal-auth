<script lang="ts">
	import { Signup } from "$lib/components/auth/sign-up"
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
