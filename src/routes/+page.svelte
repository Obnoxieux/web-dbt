<script>
    import CodeExampleSection from "../components/home/CodeExampleSection.svelte";
</script>

<div class="hero min-h-full bg-base-200 p-5 md:p-20 rounded-lg border-2 border-primary mb-4">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg" class="max-w-full lg:max-w-sm rounded-lg shadow-2xl" alt="Hero" />
          <div>
            <h1 class="text-5xl font-bold">Hi! I'm David.</h1>
            <p class="py-6">I transform zeros, ones and caffeine into beautiful and functional web and mobile applications.</p>
            <a href="/contact" class="btn btn-primary">Get in touch</a>
          </div>
    </div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center my-4">
    <div class="card w-full bg-gradient-to-b from-primary to-secondary text-primary-content shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Projects</h2>
          <p>Including personal ones (like this website)</p>
          <div class="card-actions justify-end">
            <a href="/projects" class="btn">Go to section</a>
          </div>
        </div>
    </div>
    <div class="card w-full bg-gradient-to-b from-primary to-accent text-primary-content shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Open source contributions</h2>
          <p>Giving back to the Open Source and Free Software communities</p>
          <div class="card-actions justify-end">
            <a href="/foss" class="btn">Go to section</a>
          </div>
        </div>
    </div>
</div>
<CodeExampleSection/>