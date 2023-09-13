<script lang="ts">
    function closeDrawer() {
        const drawer: HTMLInputElement | null = <HTMLInputElement>document.getElementById("drawer")
        if (drawer) {
            drawer.checked = false
        }
    }
</script>

<li><a on:click={closeDrawer} class="text-xl" href="/">Home</a></li>
<li><a on:click={closeDrawer} class="text-xl" href="/tech">Tech Stack</a></li>
<li><a on:click={closeDrawer} class="text-xl" href="/projects" data-sveltekit-preload-data>Projects</a></li>
<li><a on:click={closeDrawer} class="text-xl" href="/personal" data-sveltekit-preload-data>Personal</a></li>
<li><a on:click={closeDrawer} class="text-xl" href="/contact">Contact</a></li>