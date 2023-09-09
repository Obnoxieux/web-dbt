<script lang="ts">
    import type {GitHubRepo} from "$lib/model/GitHubRepo";

    export let repo: GitHubRepo
    const slug = repo.name

    export let color: string

    /**
     * Tailwind CSS class names to please its compiler
     * badge-accent badge-primary badge-secondary badge-warning
     */
</script>

<div class="card w-full h-full bg-base-200 border-2 border-neutral-content shadow-xl">
    <div class="card-body">
        <h2 class="card-title">{repo.name}</h2>
        <p>{repo.description}</p>
        <div class="card-actions justify-between items-center">
            <div class="badge badge-lg badge-{color} dark:badge-outline">{repo.language}</div>
            <a href="projects/{slug}" class="btn btn-outline" data-sveltekit-preload-code>Details</a>
        </div>
    </div>
</div>