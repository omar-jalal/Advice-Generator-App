<script>
    import { fade } from 'svelte/transition'
    import { Advices } from '../../../stores/advices'
    import { SavedAdvices } from '../../../stores/saved-advices'
    import Add from '$lib/add.svelte'

</script>

<svelte:head>
    <title>Advices</title>
</svelte:head>
<main in:fade out:fade class="z-0 grid pt-8 min-h-[100vh]">
    <article class="container flex flex-row gap-10 justify-between xl:w-[90%] sm:w-11/12 mx-auto">
        <section class="flex flex-col gap-4 place-items-center max-w-[50%] mx-auto">
            <h1 class="text-center text-2xl">Random Advices:</h1>
            <div>
                {#each $Advices as advice, i}
                <div class="card flex flex-col gap-2 p-5 mb-5 text-center drop-shadow-3xl bg-gradient-to-t from-dark-blue to-dark-grayish-blue rounded-xl">
                    <Add {advice}/>
                    <p in:fade out:fade class="text-neon-green mr-2  ml-5"># {i+1}</p>
                    <q in:fade out:fade class="block mt-4 text-2xl leading-9 font-semibold text-white">{advice}</q>
                </div> 
                {/each}
            </div>
        </section>
        <section class="flex flex-col gap-4 place-items-center max-w-[50%] mx-auto p-5 border-solid border-neon-green border-12 rounded-lg">
            <h1 class="text-2xl">Your Advices:</h1>
            {#each $SavedAdvices as advice, i}
            <div class="card flex flex-col gap-2 p-5 mb-5 text-center drop-shadow-3xl bg-gradient-to-t from-dark-blue to-dark-grayish-blue rounded-xl">
                    <p in:fade out:fade class="text-neon-green mr-2  ml-5"># {i+1}</p>
                    <q in:fade out:fade class="block mt-4 text-2xl leading-9 font-semibold text-white">{advice}</q>
            </div>
            {/each}
        </section>     
    </article>
    <button class="mb-5">Load More</button>
</main>