import type {PageServerLoad} from "../../../../.svelte-kit/types/src/routes/mywork/projects/$types";
import {GitHubAPIRequest} from "$lib/classes/GitHubAPIRequest";
import type {GitHubRepo} from "$lib/model/GitHubRepo";

export const load = (async ({params}) => {
    const request = new GitHubAPIRequest()

    const repos: GitHubRepo[] = await request.loadRepositoryInformation(request.githubUsername)

    return {repos}
}) satisfies PageServerLoad