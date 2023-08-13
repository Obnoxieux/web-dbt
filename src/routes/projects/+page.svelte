<script lang="ts">
    import ProjectCard from "../../components/projects/ProjectCard.svelte";
    import type {GitHubRepo} from "$lib/model/GitHubRepo";

    export let data;
    let shownLanguage: string = "All"

    let languages: Array<string> = ["All"]
    data.repos.forEach((repo: GitHubRepo) => {
        languages.push(repo.language)
    })
    let filters = new Set<string>(languages)

    let filteredRepos: GitHubRepo[] = data.repos

    function toggleFilter(filter: string) {
        shownLanguage = filter
        if (filter === "All") {
            filteredRepos = data.repos
        } else {
            filteredRepos = data.repos.filter((repo: GitHubRepo) => repo.language === filter)
        }
    }
</script>

<h1 class="h1 mb-5 lg:mb-8">My Projects</h1>
<div class="flex flex-wrap mb-5 md:mb-10 gap-2 md:gap-4 items-center">
    <div class="h2">Filter by Language:</div>
    {#each filters as filter}
        <button
            on:click={() => toggleFilter(filter)}
            class="filter-button btn btn-sm md:btn-md"
            class:btn-neutral={filter === shownLanguage}
            class:btn-outline={filter !== shownLanguage}
        >
            {filter}
        </button>
    {/each}
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-9">
    {#each filteredRepos as repo}
        <ProjectCard {repo}/>
    {/each}
</div>