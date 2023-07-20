<script lang="ts">
  import { Language } from "$lib/Language";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher()
  let activeTab = Language.typescript

  function changeLanguage(language: Language) {
    activeTab = language

    dispatch('message', {
      language: language
    })
  }
</script>

<div class="tabs tabs-boxed my-8">
  <button on:click={() => changeLanguage(Language.typescript)} class="tab tab-lg {activeTab == Language.typescript ? 'tab-active' : ''}">TypeScript</button>
  <button on:click={() => changeLanguage(Language.swift)} class="tab tab-lg {activeTab == Language.swift ? 'tab-active' : ''}">Swift</button> 
  <button on:click={() => changeLanguage(Language.kotlin)} class="tab tab-lg {activeTab == Language.kotlin ? 'tab-active' : ''}">Kotlin</button> 
  <button on:click={() => changeLanguage(Language.php)} class="tab tab-lg {activeTab == Language.php ? 'tab-active' : ''}">PHP</button>
</div>