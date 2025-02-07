import type {Page, Post} from "web-dbt-payload";

/**
 * not exported by name, keep in sync with `payload-types.ts`
 */
export type Link = {
  type?: ('reference' | 'custom') | null;
  newTab?: boolean | null;
  reference?:
      | ({
    relationTo: 'pages';
    value: string | Page;
  } | null)
      | ({
    relationTo: 'posts';
    value: string | Post;
  } | null);
  url?: string | null;
  label: string;
  /**
   * Choose how the link should be rendered.
   */
  appearance?: ('default' | 'outline') | null;
};