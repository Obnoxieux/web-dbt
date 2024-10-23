<script lang="ts">
    import ProjectCard from "../../components/projects/ProjectCard.svelte";
    import type {GitHubRepo} from "$lib/model/GitHubRepo";
    import {ColorUtility} from "$lib/classes/ColorUtility";
    import {fly} from "svelte/transition";
    import {cubicOut} from "svelte/easing";

    let { data } = $props();
    let shownLanguage: string = $state("All")

    let languages: Array<string> = ["All"]

    if (Array.isArray(data.repos)) {
        data.repos.forEach((repo: GitHubRepo) => {
            languages.push(repo.language)
        })
    }
    let filters = new Set<string>(languages)

    let filteredRepos: GitHubRepo[] = $state(data.repos)

    function toggleFilter(filter: string) {
        shownLanguage = filter
        if (filter === "All") {
            filteredRepos = data.repos
        } else {
            filteredRepos = data.repos.filter((repo: GitHubRepo) => repo.language === filter)
        }
    }
</script>

<section id="project-teaser" class="mb-4 mt-2 flex flex-col gap-2">
    <h1 class="font-semibold mb-2 text-xl text-primary">My Projects</h1>
    <p class="text-3xl sm:text-4xl font-extrabold">Discover my work</p>
    <div class="mt-4 max-w-3xl space-y-6">
        <p>
            All projects on this page are loaded via the GitHub API from my personal profile and therefore always up-to-date.
            Links to the GitHub repository are provided on the detail page. Feel free to contribute and/or roast my code.
        </p>
    </div>
</section>
<div class="divider my-5"></div>
<section id="project-examples">
    <div class="flex flex-wrap mb-5 md:mb-10 gap-2 md:gap-4 items-center">
        <div class="h2">Filter by Language:</div>
        {#each filters as filter}
            <button
                    onclick={() => toggleFilter(filter)}
                    class="filter-button btn btn-sm md:btn-md"
                    class:btn-neutral={filter === shownLanguage}
                    class:btn-outline={filter !== shownLanguage}
            >
                {filter}
            </button>
        {/each}
    </div>
    <div class="grid auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-9">
        {#each filteredRepos as repo, index}
            {#key filteredRepos}
                <div in:fly|global={{ y: 50, duration: index*300 + 100, delay: 200, easing: cubicOut }}>
                    <ProjectCard {repo} color="{ColorUtility.determineColor(repo.language)}"/>
                </div>
            {/key}
        {/each}
    </div>
</section>
