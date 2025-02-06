import type { OpenGraph } from "svelte-meta-tags/dist/types"

export class OpenGraphDefaults {
    static description = 'Turning caffeine into code since 2021'
    static title = 'Yet another coding website'
    static ogImageName = 'fake_code_photo.webp'

    static getOpenGraphObject(url: URL, title: string, description: string): OpenGraph {
        return {
            url: new URL(url.pathname, url.origin).href,
            type: 'website',
            title: title,
            description: description,
            images: [
                {
                    url: `${url.origin}/${OpenGraphDefaults.ogImageName}`,
                    alt: 'Code in an IDE on a dark background',
                },
            ],
            siteName: 'web-dbt'
        }
    }
}