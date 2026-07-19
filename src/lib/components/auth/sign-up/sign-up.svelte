<script lang="ts">
import { authClient } from "$lib/auth-client";
import { writable } from "svelte/store";
import { Button } from "$lib/components/ui/button";
import * as Card from "$lib/components/ui/card";
import { Input } from "$lib/components/ui/input";
import { Label } from "$lib/components/ui/label";

// Create writable stores for form fields
let displayUsername = $state('');
let password = $state('');

// Default fields for unused fields
const emailsuffix = '@example.com';
const name = '';

// Function to handle form submission
async function handleSignUp () {
	await authClient.signUp.email({
		email: displayUsername+emailsuffix,
		password: password,
        name: name,
		username: displayUsername,
		fetchOptions: {
			onSuccess() {
				console.log("Your account has been created.");
			},
			onError(context) {
				console.log(context.error.message);
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
            <Input id="user-name" placeholder="Username" bind:value={displayUsername} />
            </div>
        </div>
        <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input id="password" placeholder="Password" type="password" bind:value={password} />
        </div>
        <Button class="w-full" onclick={()=>handleSignUp()}>
            Create an account
        </Button>
    </div>
  </Card.Content>
</Card.Root>