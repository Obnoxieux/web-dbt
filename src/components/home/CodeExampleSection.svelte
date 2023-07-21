<script lang="ts">
    import CodeTabs from "./CodeTabs.svelte";
    import CodeBlock from "./CodeBlock.svelte";
    import { Language } from "$lib/Language";
    import { languages } from "$lib/codeSamples";

    let lang: any = languages.typescript

    function handleMessage(event: { detail: { language: Language; }; }) {
        switch (event.detail.language) {
            case Language.typescript:
                lang = languages.typescript
                break
            case Language.kotlin:
                lang = languages.kotlin
                break
            case Language.swift:
                lang = languages.swift
                break
            case Language.php:
                lang = languages.php
                break
        }
    }
</script>

<div class="card lg:card-side w-full bg-base-200 border-2 border-secondary shadow-xl my-4">
    <div class="card-body">
        <div class="grid grid-cols-1 lg:grid-cols-3 items-center">
            <div>
                <h2 class="card-title">Languages</h2>
                <p class="my-3">that I use and sometimes love</p>
                <CodeTabs on:message={handleMessage}/>
            </div> 
            <CodeBlock lang={lang}/>
        </div>
    </div>
  </div>
