import {GitHubAPIRequest} from "$lib/server/classes/GitHubAPIRequest";
import type {GitHubRepo} from "$lib/model/GitHubRepo";
import type {PageServerLoad} from "../../../../.svelte-kit/types/src/routes/projects/[slug]/$types";

export const load = (async ({params}) => {
    const request = new GitHubAPIRequest()

    const repo: GitHubRepo = await request.loadSingleRepository(request.githubUsername, "repos", params.slug)
    return {repo}
}) satisfies PageServerLoad