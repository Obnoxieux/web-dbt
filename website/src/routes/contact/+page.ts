import {OpenGraphDefaults} from '$lib/classes/OpenGraphDefaults';
import type {MetaTagsProps} from 'svelte-meta-tags';
import type {PageLoad} from "../../../.svelte-kit/types/src/routes/$types";

export const load: PageLoad = async ({ url }) => {
    const pageTitle = 'Contact'
    const description = 'Send me an email via the contact form.'

    const metaTags: MetaTagsProps = Object.freeze({
        title: pageTitle,
        description: description,
        openGraph: OpenGraphDefaults.getOpenGraphObject(url, pageTitle, description),
    });

  return {
    metaTagsChild: metaTags
  };
};