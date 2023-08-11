<script lang="ts">
    import type {GitHubRepo} from "$lib/model/GitHubRepo";

    export let repo: GitHubRepo

    function determineColor(language: string): string {
        switch (language) {
            case "Swift":
                return "swift"
            case "Kotlin":
                return "kotlin"
            case "Svelte":
                return "typescript"
            case "TypeScript":
                return "typescript"
            default:
                return "neutral"
        }
    }
</script>

<div class="card w-full bg-base-200 border-2 border-neutral-content shadow-xl">
    <div class="card-body">
        <h2 class="card-title">{repo.name}</h2>
        <p>{repo.description}</p>
        <div class="card-actions justify-between items-center">
            <div class="badge badge-lg badge-outline badge-{determineColor(repo.language)}">{repo.language}</div>
            <a href="#" class="btn btn-outline">Details</a>
        </div>
    </div>
</div>