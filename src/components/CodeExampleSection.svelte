<script lang="ts">
    import CodeTabs from "./CodeTabs.svelte";
    import CodeBlock from "./CodeBlock.svelte";
    import { Language } from "$lib/Language";
    import { codeSamples } from "$lib/codeSamples";
    import { kotlin, typescript } from "svelte-highlight/languages";

    let code = codeSamples.typescript

    function handleMessage(event: { detail: { language: Language; }; }) {
        switch (event.detail.language) {
            case Language.typescript:
                code = codeSamples.typescript
                break
            case Language.kotlin:
                code = codeSamples.kotlin
                break
            case Language.swift:
                code = codeSamples.swift
                break
            case Language.php:
                code = codeSamples.php
                break
        }
    }
</script>

<div class="card lg:card-side w-full bg-base-200 border-2 border-secondary shadow-xl my-4">
    <div class="card-body">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
                <h2 class="card-title">Languages</h2>
                <p class="my-3">that I use and sometimes love</p>
                <CodeTabs on:message={handleMessage}/>
            </div> 
            <CodeBlock {code}/>
        </div>
    </div>
  </div>
