<script lang="ts">
import { goto } from "$app/navigation";
import { authClient } from "$lib/auth-client";
import { writable } from "svelte/store";
import { Button } from "$lib/components/ui/button";
import * as Card from "$lib/components/ui/card";
import { Input } from "$lib/components/ui/input";
import { Label } from "$lib/components/ui/label";

// Create writable stores for form fields
const displayUsername = writable("");
const password = writable("");

// Default fields for unused fields
const email = 'null@example.com';

// Function to handle form submission
const handleSignUp = async () => {
	const user = {
		displayUsername: $displayUsername,
		password: $password
	};
	await authClient.signUp.email({
		email: email,
		password: user.password,
        name: '',
		displayUsername: user.displayUsername,
		callbackURL: "/",
		fetchOptions: {
			onSuccess() {
				alert("Your account has been created.");
				goto("/");
			},
			onError(context) {
				alert(context.error.message);
			},
		},
	});
};
</script>

<Card.Root class="mx-auto max-w-sm">
  <Card.Header>
    <Card.Title class="text-xl">Sign Up</Card.Title>
    <Card.Description>
      Enter your information to create an account
    </Card.Description>
  </Card.Header>
  <Card.Content>
    <div class="grid gap-4">
      <div class="grid grid-cols-2 gap-4">
        <div class="grid gap-2">
          <Label for="user-name">Username</Label>
          <Input
            id="user-name"
            placeholder="Username"
            required
            bind:value={$displayUsername}
          />
        </div>
      </div>
      <div class="grid gap-2">
        <Label for="password">Password</Label>
        <Input id="password" type="password" bind:value={$password} />
      </div>
      <Button type="button" class="w-full" on:click={handleSignUp}>
        Create an account
    </Button>
    </div>
    <div class="mt-4 text-center text-sm">
      Already have an account?
      <a href="/sign-in" class="underline"> Sign in </a>
    </div>
  </Card.Content>
</Card.Root>