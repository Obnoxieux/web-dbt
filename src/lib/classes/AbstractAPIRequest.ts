import fetch from 'node-fetch'

export abstract class AbstractAPIRequest {
    protected readonly API_URL: string = ""

    // reads URL and returns the full response as JSON
    protected async fetchJSONData(url: string): Promise<unknown> {
        const response = await fetch(url)
        console.log(response)
        return await response.json()
    }
}
