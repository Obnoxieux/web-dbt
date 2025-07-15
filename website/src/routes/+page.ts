import {OpenGraphDefaults} from '$lib/classes/OpenGraphDefaults';
import type {MetaTagsProps} from 'svelte-meta-tags';
import {env} from "$env/dynamic/public";
import type {Page} from "web-dbt-payload";
import {stringify} from "qs-esm";
import {error} from "@sveltejs/kit";

export const load = async ({url, fetch}) => {
  const pageTitle = 'Main';

  const metaTags: MetaTagsProps = Object.freeze({
    title: pageTitle,
    openGraph: OpenGraphDefaults.getOpenGraphObject(url, pageTitle, OpenGraphDefaults.description),
  });

  const query = {
    slug: {
      equals: 'main'
    }
  };

  const stringifiedQuery = stringify(
      {
        where: query, // ensure that `qs-esm` adds the `where` property, too!
      },
      {addQueryPrefix: true},
  );

  const response = await fetch(`${env.PUBLIC_CMS_URL}/api/pages${stringifiedQuery}`);
  const pages: { docs: Page[] } = await response.json();

  if (pages.docs.length === 0) {
    return error(500, 'Main Page not found',)
  }

  return {
    metaTagsChild: metaTags,
    page: pages.docs.at(0),
  };
};