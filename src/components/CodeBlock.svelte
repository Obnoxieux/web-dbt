<script lang="ts">
  import Highlight, { LineNumbers } from "svelte-highlight";
  import githubDark from "svelte-highlight/styles/github-dark";
  import { codeSamples } from "$lib/codeSamples";
  import { typescript, type LanguageType } from "svelte-highlight/languages";

  export let code = codeSamples.typescript
  //TODO: refactor codeSamples
  $: language = typescript
</script>

<svelte:head>
  {@html githubDark}
</svelte:head>

<div class="mockup-code">
    <Highlight language={language} {code} let:highlighted>
        <LineNumbers {highlighted} />
    </Highlight>
</div>