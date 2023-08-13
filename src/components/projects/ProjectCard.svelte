<script lang="ts">
    import type {GitHubRepo} from "$lib/model/GitHubRepo";
    import {ColorUtility} from "$lib/classes/ColorUtility";

    export let repo: GitHubRepo
</script>

<div class="card w-full bg-base-200 border-2 border-neutral-content shadow-xl">
    <div class="card-body">
        <h2 class="card-title">{repo.name}</h2>
        <p>{repo.description}</p>
        <div class="card-actions justify-between items-center">
            <div class="badge badge-lg badge-outline badge-{ColorUtility.determineColor(repo.language)}">{repo.language}</div>
            <a href="#" class="btn btn-outline">Details</a>
        </div>
    </div>
</div>