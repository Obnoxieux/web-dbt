import type {PageServerLoad} from "../../../.svelte-kit/types/src/routes/projects/$types";
import {GitHubAPIRequest} from "$lib/server/classes/GitHubAPIRequest";
import type {GitHubRepo} from "$lib/model/GitHubRepo";

export const load = (async ({params}) => {
    const request = new GitHubAPIRequest()

    const repos: GitHubRepo[] = await request.loadRepositoriesForUser(request.githubUsername, "users")

    return {repos}
}) satisfies PageServerLoad