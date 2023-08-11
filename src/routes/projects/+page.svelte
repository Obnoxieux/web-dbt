<script lang="ts">
    import ProjectCard from "../../components/projects/ProjectCard.svelte";
    import type {GitHubRepo} from "$lib/model/GitHubRepo";

    export let data;

    let languages: Array<string> = []
    data.repos.forEach((repo: GitHubRepo) => {
        languages.push(repo.language)
    })
    const filters = new Set<string>(languages)
</script>

<h1 class="h1 mb-5 lg:mb-8">My Projects</h1>
<div class="flex flex-wrap mb-5 md:mb-10 gap-2 md:gap-4 items-center">
    <div class="h2">Filter by Language:</div>
    {#each filters as filter}
        <button class="btn btn-sm md:btn-md btn-outline">{filter}</button>
    {/each}
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-9">
    {#each data.repos as repo}
        <ProjectCard {repo}/>
    {/each}
</div>