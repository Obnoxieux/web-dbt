import {OpenGraphDefaults} from '$lib/classes/OpenGraphDefaults';
import type {MetaTagsProps} from 'svelte-meta-tags';
import type {PageLoad} from "../../../.svelte-kit/types/src/routes/$types";

export const load: PageLoad = async ({ url, data }) => {
    const pageTitle = 'Personal'
    const description = 'See my personal baseball statistics.'

    const metaTags: MetaTagsProps = Object.freeze({
        title: pageTitle,
        description: description,
        openGraph: OpenGraphDefaults.getOpenGraphObject(url, pageTitle, description),
    });

  return {
    metaTagsChild: metaTags,
    stats: data?.stats
  };
};