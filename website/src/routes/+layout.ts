import type {LayoutLoad} from "./$types";
import {env} from "$env/dynamic/public";
import type {Footer} from "web-dbt-payload";


export const load: LayoutLoad = async ({fetch}) => {
  const response = await fetch(`${env.PUBLIC_CMS_URL}/api/globals/footer?depth=1`);
  const footer: Footer = await response.json();

  return {
    footer: footer,
  }
}