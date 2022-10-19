<script>
    import { SavedAdvices } from "../stores/saved-advices";
    export let advice;

    const addAdvice = () => {
        

        
        SavedAdvices.update((advices) => {
            return [advice, ...advices]
        });
    }
</script>



<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg on:click={addAdvice} class="block absolute fill-grayish-blue hover:fill-neon-green xl:left-[35.5em] lg:left-[22em] md:left-[11.5em] sm:left-[12.5em] top-4 xl:max-w-[2%] lg:max-w-[3%] md:max-w-[5%] sm:max-w-[7%] max-h-[10%] cursor-pointer transition-all duration-300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512" height="512">
    <g>
        <path d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
    </g>
</svg>