import { OpenGraphDefaults } from '$lib/classes/OpenGraphDefaults';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = async ({ url }) => {
    const pageTitle = 'Main'

    const metaTags: MetaTagsProps = Object.freeze({
        title: pageTitle,
        openGraph: OpenGraphDefaults.getOpenGraphObject(url, pageTitle, OpenGraphDefaults.description),
    });

  return {
    metaTagsChild: metaTags
  };
};