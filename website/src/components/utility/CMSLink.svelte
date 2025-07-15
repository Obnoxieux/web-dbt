<script lang="ts">
  import type {Link} from "$lib/model/Link";

  interface Props {
    link: Link
    classes?: string
  }
  let {link, classes = ""}: Props = $props()

  const href = $derived.by(() => {
    return link.type === 'reference' && typeof link.reference?.value === 'object' && link.reference.value.slug
        ? `${link.reference?.relationTo !== 'pages' ? `/${link.reference?.relationTo}` : ''}/${
            link.reference.value.slug
        }`
        : link.url
  })
</script>

<a href={href || link.url || ""} class="{classes}" target={link.newTab ? "_blank" : ""}>{link.label}</a>