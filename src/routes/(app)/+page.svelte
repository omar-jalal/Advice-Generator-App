<script>
    import { fade } from 'svelte/transition'

    
    export let data;
    
    $: newAdvice = data.props.data.slip.advice;
    $: count = 0;

    const increaseAdviceCount = async () => {
        const url = 'https://api.adviceslip.com/advice';
        const res = await fetch(url, { cache: "no-cache" })
        const advice = await res.json();
        ++count
        return newAdvice = advice.slip.advice
    }

    const adviceTimeout = setTimeout(() => {
        increaseAdviceCount()
        setInterval(() => {
            clearTimeout(adviceTimeout);
            increaseAdviceCount()
        }, 3000)
    }, 3000)

    increaseAdviceCount()
    
</script>

<svelte:head>
    <title>Advice Generator App</title>
</svelte:head>
<main in:fade out:fade class="z-0 grid place-items-center h-[93vh]">
    <article class="card h-[51%] xl:h-[45%] 2xl:h-[45%] text-center drop-shadow-3xl bg-gradient-to-t from-dark-blue to-dark-grayish-blue sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-[40%] 2xl:w-[40%] rounded-xl transition-all duration-400">
        <div class="container xl:h-[75%] h-[65%] xl:w-[80%] sm:w-11/12 mx-auto grid justify-center gap-2 sm:mb-16 md:mb-16 lg:mb-16 xl:mb-0 2xl:mb-0">
            <p class="text-neon-green tracking-[.25em] mt-10">ADVICE <span>#{count}</span></p>
            <q class="block mt-4 text-2xl leading-9 font-semibold text-white">{newAdvice}</q>
        </div>
        <div class="container xl:w-[80%] sm:w-11/12 mx-auto">
            <picture>
                <source srcset="pattern-divider-mobile.svg" alt="Devider" media="(max-width:480px)">
                <source srcset="pattern-divider-desktop.svg" alt="Devider" media="(min-width:481px)">
                <img class="w-[100%] h-auto" src="pattern-divider-mobile.svg" alt="Devider">
            </picture>
        </div>
    </article>
    <button data-sveltekit-prefetch on:click={increaseAdviceCount} title="Randomize" class="z-10 top-[73%] xl:top-[71%]  2xl:top-[71%] rounded-full cursor-pointer absolute border-neon-green border-[1.4em] hover:drop-shadow-2xl bg-neon-green">
        <img src="icon-dice.svg" alt="Randomize">
    </button>

</main>