import { OpenGraphDefaults } from '$lib/classes/OpenGraphDefaults';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = async ({ url }) => {
    const pageTitle = 'Impressum/Legal Notice'
    const description = 'Legal information required by German law.'

    const metaTags: MetaTagsProps = Object.freeze({
        title: pageTitle,
        description: description,
        openGraph: OpenGraphDefaults.getOpenGraphObject(url, pageTitle, description),
    });

  return {
    metaTagsChild: metaTags
  };
};