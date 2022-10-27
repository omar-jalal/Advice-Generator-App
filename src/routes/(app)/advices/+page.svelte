<script>
    import { fade } from 'svelte/transition'
    import { Advices } from '../../../stores/advices'
    import { SavedAdvices } from '../../../stores/saved-advices'
    import Add from '$lib/add.svelte'

</script>

<svelte:head>
    <title>Advices</title>
</svelte:head>
<main in:fade out:fade class="z-0 grid pt-8 min-h-[100vh] pb-10">
    <article class="container flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-10 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-start xl:w-[90%] sm:w-11/12 mx-auto">
        <section class="flex flex-col gap-4 place-items-center w-[50%] sm:w-[100%] mx-auto 2xl:max-h-fit xl:max-h-fit lg:max-h-fit md:max-h-fit sm:max-h-[50vh]">
            <h1 class="text-center text-2xl">Random Advices:</h1>
            <div class="overflow-auto  drop-shadow-3xl">
                {#each $Advices as advice, i}
                <div class="card flex flex-col gap-2 p-5 mb-5 text-center bg-gradient-to-t from-dark-blue to-dark-grayish-blue rounded-xl">
                    <Add {advice}/>
                    <p in:fade out:fade class="text-neon-green mr-2  ml-5"># {i+1}</p>
                    <q in:fade out:fade class="block mt-4 text-2xl leading-9 font-semibold text-white">{advice}</q>
                </div> 
                {/each}
            </div>
        </section>
        <hr class="text-grayish-blue 2xl:hidden xl:hidden lg:hidden md:hidden sm:block">
        <section class="flex flex-col gap-4 place-items-center w-[50%] sm:w-[100%] mx-auto p-5 2xl:max-h-fit xl:max-h-fit lg:max-h-fit md:max-h-fit sm:max-h-[50vh]">
            <h1 class="text-2xl">Your Advices:</h1>
            <div class="overflow-auto drop-shadow-3xl">
                {#each $SavedAdvices as advice, i}
                <div class="card flex flex-col gap-2 p-5 mb-5 text-center drop-shadow-3xl bg-gradient-to-t from-dark-blue to-dark-grayish-blue rounded-xl">
                        <p in:fade out:fade class="text-neon-green mr-2  ml-5"># {i+1}</p>
                        <q in:fade out:fade class="block mt-4 text-2xl leading-9 font-semibold text-white">{advice}</q>
                </div>
                {/each}

            </div>
        </section>     
    </article>
</main>