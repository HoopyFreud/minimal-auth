<script lang="ts">
import { authClient } from "$lib/auth-client";
import { Button } from "$lib/components/ui/button";
import * as Card from "$lib/components/ui/card";

// Function to handle form submission
async function handleSignOut () {
	await authClient.signOut();
};
</script>

<Card.Root class="mx-auto max-w-sm">
  <Card.Header>
    <Card.Title class="text-xl">Sign Out</Card.Title>
    <Card.Description>
      Sign out of your account
    </Card.Description>
  </Card.Header>
  <Card.Content>
    <div class="grid gap-4">
        <Button class="w-full" onclick={()=>handleSignOut()}>
            Sign Out
        </Button>
    </div>
  </Card.Content>
</Card.Root>