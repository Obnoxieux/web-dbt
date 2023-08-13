<script>
    import CodeExampleSection from "../components/home/CodeExampleSection.svelte";
</script>

<div class="hero min-h-full bg-base-200 p-5 md:p-20 rounded-lg border-2 border-neutral-content mb-4 shadow-xl">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg" class="max-w-full lg:max-w-sm rounded-lg shadow-2xl" alt="Hero" />
          <div>
            <h1 class="text-5xl font-bold">Hi! I'm David.</h1>
            <p class="py-6">I transform zeros, ones and caffeine into beautiful and functional web and mobile applications.</p>
            <a href="/contact" class="btn btn-neutral">Get in touch</a>
          </div>
    </div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center my-4">
    <div class="card w-full bg-base-200 shadow-xl border-2 border-neutral-content">
        <div class="card-body">
          <h2 class="card-title">My Work</h2>
          <p>Technologies, frameworks and what I build with them</p>
          <div class="card-actions justify-end">
            <a href="/tech" class="btn btn-neutral">Go to section</a>
          </div>
        </div>
    </div>
    <div class="card w-full bg-base-200 shadow-xl border-2 border-neutral-content">
        <div class="card-body">
          <h2 class="card-title">Open source contributions</h2>
          <p>Giving back to the Open Source and Free Software communities</p>
          <div class="card-actions justify-end">
            <a href="/tech/foss" class="btn btn-neutral">Go to section</a>
          </div>
        </div>
    </div>
</div>
<CodeExampleSection/>