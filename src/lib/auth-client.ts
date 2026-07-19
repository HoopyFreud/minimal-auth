import { createAuthClient } from "better-auth/svelte"
import { anonymousClient } from "better-auth/client/plugins"
import { usernameClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
    plugins: [
        anonymousClient(),
        usernameClient() 
    ] 
})