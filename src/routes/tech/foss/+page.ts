import { OpenGraphDefaults } from '$lib/classes/OpenGraphDefaults';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = async ({ url }) => {
    const pageTitle = 'Open Source contributions'
    const description = 'My ethos on free software.'

    const metaTags: MetaTagsProps = Object.freeze({
        title: pageTitle,
        description: description,
        openGraph: OpenGraphDefaults.getOpenGraphObject(url, pageTitle, description),
    });

  return {
    metaTagsChild: metaTags
  };
};