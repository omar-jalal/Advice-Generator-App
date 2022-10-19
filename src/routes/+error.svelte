<script>
    import { page } from '$app/stores';
</script>

<main class="grid place-items-center h-[100vh]">
    <article class="text-center">
        <h1 class="text-2xl mb-8">{$page.status}: {$page.error.message}</h1>
        <a class="text-grayish-blue" href="/">Return To Homepage.</a>
    </article>
</main>