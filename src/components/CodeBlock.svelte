<script lang="ts">
      import Highlight from "svelte-highlight";
      import { LineNumbers } from "svelte-highlight";
        import swift from "svelte-highlight/languages/swift";
        import githubDark from "svelte-highlight/styles/github-dark";

    const code = 'let programmer = "David"\nfunc doThings() { \nprint("Fun!")\n }'
</script>

<svelte:head>
  {@html githubDark}
</svelte:head>

<div class="mockup-code">
    <Highlight language={swift} {code} let:highlighted>
        <LineNumbers {highlighted} />
    </Highlight>
</div>