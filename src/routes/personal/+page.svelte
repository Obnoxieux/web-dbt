<script lang="ts">
    import BaseballTeaser from "../../components/personal/BaseballTeaser.svelte";
    import BaseballStatsSection from "../../components/personal/BaseballStatsSection.svelte";
    import TeamHeroSection from "../../components/personal/TeamHeroSection.svelte";

    export let data;
</script>

<div class="prose">
    <h1>Private Life</h1>
    <p>The stuff I do when I'm not coding.</p>
</div>
<div class="divider"></div>
<BaseballTeaser/>
<div class="divider"></div>
<BaseballStatsSection
        statsBatting="{data.stats.batting}"
        statsPitching="{data.stats.pitching}"
/>
<div class="divider my-8"></div>
<TeamHeroSection/>