<script lang="ts">
  import Highlight, { LineNumbers } from "svelte-highlight";
  import githubDark from "svelte-highlight/styles/github-dark";
  import { languages } from "$lib/codeSamples";

  export let lang = languages.typescript
</script>

<svelte:head>
  {@html githubDark}
</svelte:head>

<div class="mockup-code col-span-2">
    <Highlight language={lang.languageType} code={lang.codeSample} let:highlighted>
        <LineNumbers {highlighted} />
    </Highlight>
</div>