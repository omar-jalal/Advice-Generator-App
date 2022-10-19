<script>
    import { fade } from 'svelte/transition'
    
</script>

<nav in:fade out:fade class="navbar bg-base-100">
    <div class="flex-1">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="btn btn-ghost normal-case text-2xl transition-all duration-300" href="/"><img class="mr-4" src="/favicon-32x32.png" alt="logo">Advice Generator</a>
    </div>
    <div class="flex-none">
    <div class="dropdown dropdown-end">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
            <span class="font-bold text-lg">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
            <button class="btn btn-primary btn-block">View cart</button>
            </div>
        </div>
        </div>
    </div>
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <div class="dropdown dropdown-end sm:block md:block lg:hidden xl:hidden">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <label tabindex="0" class="btn btn-ghost btn-circle avatar mr-2">
        <div class="w-10 rounded-full">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="https://i.pravatar.cc/300" />
        </div>
        </label>
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 mr-1">
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a class="transition-all duration-300 hover:bg-neon-green hover:text-grayish-blue active:bg-dark-blue active:text-neon-green" href="/advices">Advices</a></li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a class="transition-all duration-300 hover:bg-neon-green hover:text-grayish-blue active:bg-dark-blue active:text-neon-green" href="/login">Login</a></li>
            <!-- svelte-ignore a11y-missing-attribute -->
            <li><a class="transition-all duration-300 hover:bg-neon-green hover:text-grayish-blue active:bg-dark-blue active:text-neon-green" href="/register">Register</a></li>
        </ul>
    </div>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul class="gap-8 mr-8 sm:hidden md:hidden lg:flex xl:flex">
                <!-- svelte-ignore a11y-missing-attribute -->
                <li class="transition-all duration-300 cursor-pointer hover:text-neon-green"><a href="/advices">Advices</a></li>
                <!-- svelte-ignore a11y-missing-attribute -->
                <li class="transition-all duration-300 cursor-pointer hover:text-neon-green"><a href="/login">Login</a></li>
                <!-- svelte-ignore a11y-missing-attribute -->
                <li class="transition-all duration-300 cursor-pointer hover:text-neon-green"><a href="/register">Register</a></li>
            </ul>
    </div>
</nav >