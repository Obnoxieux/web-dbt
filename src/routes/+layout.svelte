<script lang="ts">
    import "../app.css";
    import Navbar from '../components/core/Navbar.svelte';
    import Footer from "../components/core/Footer.svelte";
    import NavbarLinks from "../components/core/NavbarLinks.svelte";
    import { MetaTags } from 'svelte-meta-tags';
    import { page } from '$app/stores';
    import { OpenGraphDefaults } from "$lib/classes/OpenGraphDefaults";

  let { data, children } = $props();

    const url = $page.url

    // Create a reactive statement to compute meta tags.
    let metaTags = $derived({
      title: OpenGraphDefaults.title,
      titleTemplate: 'web-dbt | %s',
      description: OpenGraphDefaults.description,
      canonical: url,
      openGraph: {
        url: url,
        type: 'website',
        title: OpenGraphDefaults.title,
        description: OpenGraphDefaults.description,
        images: [
          {
            url: `${url}${OpenGraphDefaults.ogImageName}`,
            alt: 'Code in an IDE on a dark background'
          },
        ],
        siteName: 'web-dbt'
      },
      ...$page.data.metaTagsChild // Override with child page meta tags if they exist.
    });
</script>

<MetaTags {...metaTags} />

<div class="drawer">
  <input id="drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col justify-items-center justify-self-center max-w-[92%] md:max-w-[85%] xl:max-w-[75%]">
    <Navbar />
    {@render children?.()}
    <div class="divider"></div>
    <Footer/>
  </div>
  <div class="drawer-side min-h-full">
    <label for="drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 w-[60%] h-full bg-base-200">
      <NavbarLinks/>
    </ul>
  </div>
</div>

<style>
  .drawer-side {
    z-index: 99;
  }
</style>