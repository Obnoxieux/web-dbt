<script>
    import "../app.css";
    import Navbar from '../components/core/Navbar.svelte';
    import Footer from "../components/core/Footer.svelte";
</script>

<div class="flex justify-center flex-col mx-auto max-w-[92%] md:max-w-[85%] xl:max-w-[75%]">
  <Navbar />
  <div class="divider"></div> 
  <slot />
  <Footer/>
</div>