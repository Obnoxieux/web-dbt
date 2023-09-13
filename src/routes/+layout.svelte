<script>
    import "../app.css";
    import Navbar from '../components/core/Navbar.svelte';
    import Footer from "../components/core/Footer.svelte";
    import NavbarLinks from "../components/core/NavbarLinks.svelte";
</script>

<div class="drawer">
  <input id="drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content mx-auto max-w-[92%] md:max-w-[85%] xl:max-w-[75%]">
    <Navbar />
    <slot />
    <div class="divider"></div>
    <Footer/>
  </div>
  <div class="drawer-side min-h-full">
    <label for="drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 w-[85%] h-full bg-base-200">
      <NavbarLinks/>
    </ul>
  </div>
</div>