import {OpenGraphDefaults} from '$lib/classes/OpenGraphDefaults';
import type {MetaTagsProps} from 'svelte-meta-tags';
import type {PageLoad} from "../../../.svelte-kit/types/src/routes/$types";

export const load: PageLoad = async ({ url, data }) => {
    const pageTitle = 'My personal projects'
    const description = 'Discover my work, from mobile apps to websites and backends.'

    const metaTags: MetaTagsProps = Object.freeze({
        title: pageTitle,
        description: description,
        openGraph: OpenGraphDefaults.getOpenGraphObject(url, pageTitle, description),
    });

  return {
    metaTagsChild: metaTags,
    repos: data?.repos
  };
};