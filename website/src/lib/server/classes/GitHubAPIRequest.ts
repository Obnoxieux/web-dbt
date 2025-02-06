import {AbstractAPIRequest} from "$lib/classes/AbstractAPIRequest";
import type {GitHubRepo} from "$lib/model/GitHubRepo";
import {env} from "$env/dynamic/private";

export class GitHubAPIRequest extends AbstractAPIRequest {
    protected readonly API_URL = "https://api.github.com"
    readonly githubUsername: string = "obnoxieux"
    protected resource = "users"

    protected buildURL(username: string, resource: string, id?: string): string {
        // TODO: refactor, works only for these two cases
        return `${this.API_URL}/${resource ?? this.resource}/${username ?? this.githubUsername}/${id ?? 'repos'}`
    }

    protected setRequestOptions(): RequestInit {
        const headers = new Headers()
        headers.append("Authorization", `Bearer ${env.GITHUB_ACCESS_TOKEN}`)
        headers.append("Accept", "application/vnd.github+json")

        return {
            method: "GET",
            headers: headers,
        }
    }

    async loadRepositoriesForUser(username: string, resource: string): Promise<[GitHubRepo]> {
        const url = this.buildURL(username, resource)
        const requestOptions = this.setRequestOptions()

        const response = await this.fetchJSONData(url, requestOptions)
        return response as [GitHubRepo]
    }

    async loadSingleRepository(owner: string, resource: string, id: string): Promise<GitHubRepo> {
        const url = this.buildURL(owner, resource, id)
        const requestOptions = this.setRequestOptions()

        const response = await this.fetchJSONData(url, requestOptions)
        return response as GitHubRepo
    }
}