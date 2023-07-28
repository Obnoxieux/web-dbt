export abstract class AbstractAPIRequest {
    protected readonly API_URL: string = ""

    // reads URL and returns the full response as JSON
    protected async fetchJSONData(url: string): Promise<any> {
        const response = await fetch(url)
        return await response.json()
    }
}
