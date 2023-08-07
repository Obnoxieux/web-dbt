import {AbstractAPIRequest} from "$lib/classes/AbstractAPIRequest";
import type {GitHubRepo} from "$lib/model/GitHubRepo";
import {GITHUB_ACCESS_TOKEN} from "$env/static/private";

export class GitHubAPIRequest extends AbstractAPIRequest {
    protected readonly API_URL = "https://api.github.com"
    readonly githubUsername: string = "obnoxieux"
    protected resource = "users"

    protected buildURL(username: string): string {
        return `${this.API_URL}/${this.resource}/${username}/repos`
    }

    protected setRequestHeaders(): Headers {
        const headers = new Headers()
        headers.append("Authorization", `Bearer ${GITHUB_ACCESS_TOKEN}`)
        headers.append("Accept", "application/vnd.github+json")
        return headers;
    }

    async loadRepositoryInformation(username: string): Promise<[GitHubRepo]> {
        const url = this.buildURL(username)
        const headers = this.setRequestHeaders()

        const requestOptions: RequestInit = {
            method: "GET",
            headers: headers,
        }

        const response = await this.fetchJSONData(url, requestOptions)
        return response as [GitHubRepo]
    }
}