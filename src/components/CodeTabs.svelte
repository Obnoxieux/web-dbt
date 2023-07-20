<script lang="ts">
  import { Language } from "$lib/Language";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher()

  function changeLanguage(language: Language) {
    dispatch('message', {
      language: language
    })
  }
</script>

<div class="tabs tabs-boxed mt-8">
  <button on:click={() => changeLanguage(Language.typescript)} class="tab tab-lg tab-active">TypeScript</button>
  <button on:click={() => changeLanguage(Language.swift)} class="tab tab-lg">Swift</button> 
  <button on:click={() => changeLanguage(Language.kotlin)} class="tab tab-lg">Kotlin</button> 
  <button on:click={() => changeLanguage(Language.php)} class="tab tab-lg">PHP</button>
</div>