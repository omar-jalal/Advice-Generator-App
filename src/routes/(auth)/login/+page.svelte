<script>
    import { enhance, applyAction } from '$app/forms'
    import { fade } from 'svelte/transition'

    export let form;
</script>

<svelte:head>
    <title>Login To Your Account.</title>
</svelte:head>

<main in:fade out:fade class="flex flex-col gap-8 justify-center items-center min-h-screen md:w-3/4 lg:w-1/2 xl:w-[25%] m-auto">
    <a href="/">
        <svg in:fade class="absolute inset-0 left-5 max-h-[5%] max-w-[5%] mt-8 cursor-pointer fill-grayish-blue hover:left-0 hover:fill-neon-green transition-all duration-300" xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="512" height="512"><path d="M17.921,1.505a1.5,1.5,0,0,1-.44,1.06L9.809,10.237a2.5,2.5,0,0,0,0,3.536l7.662,7.662a1.5,1.5,0,0,1-2.121,2.121L7.688,15.9a5.506,5.506,0,0,1,0-7.779L15.36.444a1.5,1.5,0,0,1,2.561,1.061Z"/></svg>
    </a>
    <section class="text-center">
        {#if form?.invalidEmail}
            <div in:fade out:fade class="alert alert-warning  shadow-lg mb-2">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>                    
                    <span>Invalid Email.</span>
                </div>
            </div>
        {/if}
        {#if form?.invalidPassword}
        <div in:fade out:fade class="alert alert-warning  shadow-lg  mb-2">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>                
                <span class="leading-7">- at least 8 characters<br>
                - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number<br>
                - Can contain special characters
                </span>
            </div>
        </div>
        {/if}
    </section>
    <section class="card drop-shadow-3xl bg-gradient-to-t from-dark-blue to-dark-grayish-blue w-[100%] h-[35vh] text-center bg-dark-grayish-blue rounded-xl transition-all duration-400">
        <div class="container h-[90%] xl:w-[80%] sm:w-11/12 m-auto grid place-items-center">
            
            <form method="POST" class="form-control" 
                use:enhance={({ form }) => {
                    // Before sending the form

                    return async ({ result, update }) => {
                        // After sending the form
                        if (result.type === 'success') {
                            form.reset()
                        }

                        if (result.type === 'invalid') {
                            await applyAction(result)
                        }
                        update();
                    }
                }
            }>
                <label class="label" for="email">Enter your Email:</label>
                <input class="input input-bordered w-full max-w-xs" type="email" name="email">
                <label class="label" for="password">Enter your Password:</label>
                <input class="input input-bordered w-full max-w-xs" type="password" name="password">
                <button class="btn btn-outline btn-success mt-8">Submit</button>
            </form>
        </div>
    </section>

</main>