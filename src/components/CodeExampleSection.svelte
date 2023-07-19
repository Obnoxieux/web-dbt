<script>
    import CodeTabs from "./CodeTabs.svelte";
    import CodeBlock from "./CodeBlock.svelte";
</script>

<div class="card lg:card-side w-full bg-base-200 border-2 border-secondary shadow-xl my-4">
    <div class="card-body">
        <div class="grid grid-cols-2">
            <div>
                <h2 class="card-title">Languages</h2>
                <p class="my-3">that I use and sometimes love</p>
                <CodeTabs/>
            </div> 
            <CodeBlock/>
        </div>
    </div>
  </div>
