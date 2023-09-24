import { OpenGraphDefaults } from '$lib/classes/OpenGraphDefaults';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = async ({ url, data }) => {
    const pageTitle = `Project: ${data.repo.name}`
    const description = `${data.repo.description ?? 'Project details at a glance'}`

    const metaTags: MetaTagsProps = Object.freeze({
        title: pageTitle,
        description: description,
        openGraph: OpenGraphDefaults.getOpenGraphObject(url, pageTitle, description),
    });

  return {
    metaTagsChild: metaTags,
    repo: data.repo
  };
};