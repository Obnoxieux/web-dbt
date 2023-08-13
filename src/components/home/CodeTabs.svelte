<script lang="ts">
  import {Language} from "$lib/enums/Language";
  import {createEventDispatcher} from "svelte";

  const dispatch = createEventDispatcher()
  let activeTab = Language.typescript

  function changeLanguage(language: Language) {
    activeTab = language

    dispatch('message', {
      language: language
    })
  }
</script>

<div class="flex max-w-[90%]">
  <div class="tabs tabs-bordered my-8 border-2 rounded-lg border-neutral-content">
    <div class="grid grid-cols-2 xl:grid-cols-4 pl-2">
      <button on:click={() => changeLanguage(Language.typescript)} class="tab tab-lg {activeTab === Language.typescript ? 'tab-active' : ''}">TypeScript</button>
      <button on:click={() => changeLanguage(Language.swift)} class="tab tab-lg {activeTab === Language.swift ? 'tab-active' : ''}">Swift</button>
      <button on:click={() => changeLanguage(Language.kotlin)} class="tab tab-lg {activeTab === Language.kotlin ? 'tab-active' : ''}">Kotlin</button>
      <button on:click={() => changeLanguage(Language.php)} class="tab tab-lg {activeTab === Language.php ? 'tab-active' : ''}">PHP</button>
    </div>
  </div>
</div>
