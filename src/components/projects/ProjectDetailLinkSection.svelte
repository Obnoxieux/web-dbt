<script lang="ts">
    import type {GitHubRepo} from "$lib/model/GitHubRepo";

    export let repo: GitHubRepo
</script>

<section>
    <h2 class="subheader col-span-4 text-typescript mb-3">Links</h2>
    <div class="col-span-4 flex gap-2 md:gap-4">
        {#if repo.homepage !== ""}
            <a href="{repo.homepage}" target="_blank" role="button" class="btn btn-neutral">Homepage</a>
        {/if}
        <a href="{repo.html_url}" target="_blank" role="button" class="btn btn-neutral">Repository</a>
    </div>
</section>