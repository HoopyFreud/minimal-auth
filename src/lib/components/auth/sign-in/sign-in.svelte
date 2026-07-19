<script lang="ts">
import { authClient } from "$lib/auth-client";
import { Button } from "$lib/components/ui/button";
import * as Card from "$lib/components/ui/card";
import { Input } from "$lib/components/ui/input";
import { Label } from "$lib/components/ui/label";

// Create writable stores for form fields
let displayUsername = $state('');
let password = $state('');

// Function to handle auth async
async function handleSignIn () {
	await authClient.signIn.username({
		username: displayUsername,
		password: password,
		fetchOptions: {
			onSuccess() {
				console.log("You have signed in");
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
    <Card.Title class="text-xl">Sign In</Card.Title>
    <Card.Description>
      Sign in to your account
    </Card.Description>
  </Card.Header>
  <Card.Content>
    <div class="grid gap-4">
        <div class="grid gap-2">
            <div class="grid gap-2">
            <Label for="user-name">Username</Label>
            <Input id="user-name" placeholder="Username" bind:value={displayUsername} />
            </div>
        </div>
        <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input id="password" placeholder="Password" type="password" bind:value={password} />
        </div>
        <Button class="w-full" onclick={()=>handleSignIn()}>
            Sign In
        </Button>
    </div>
  </Card.Content>
</Card.Root>