<script lang="ts">
  import Highlight, { LineNumbers } from "svelte-highlight";
  import githubDark from "svelte-highlight/styles/github-dark";
  import { languages } from "$lib/codeSamples";
  import {cubicIn} from "svelte/easing";
  import { fly } from 'svelte/transition';

  export let lang = languages.typescript
</script>

<svelte:head>
  {@html githubDark}
</svelte:head>

{#key lang}
    <div in:fly={{x: -50, easing: cubicIn}} class="mockup-code col-span-2 min-h-[640px]">
        <Highlight language={lang.languageType} code={lang.codeSample} let:highlighted>
            <LineNumbers {highlighted} />
        </Highlight>
    </div>
{/key}