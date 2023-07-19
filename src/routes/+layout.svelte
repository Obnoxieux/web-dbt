<script>
    import "../app.css";
    import Navbar from '../components/Navbar.svelte';
    import Footer from "../components/Footer.svelte";
</script>

<div class="flex justify-center flex-col mx-auto  max-w-[95%] md:max-w-[85%] xl:max-w-[75%]">
  <Navbar />
  <div class="divider"></div> 
  <slot />
  <Footer/>
</div>
