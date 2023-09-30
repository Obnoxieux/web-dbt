<script lang="ts">
    import BaseballTeaser from "../../components/personal/BaseballTeaser.svelte";
    import BaseballStatsSection from "../../components/personal/BaseballStatsSection.svelte";
    import TeamHeroSection from "../../components/personal/TeamHeroSection.svelte";

    export let data;
</script>

<div class="flex flex-col min-w-full md:w-screen max-w-[90%] lg:max-w-[70%]">
    <div class="prose">
        <h1>Private Life</h1>
        <p>The stuff I do when I'm not coding aka the thing we call life.</p>
    </div>
    <div class="divider"></div>
    <BaseballTeaser/>
    <div class="divider"></div>
    <BaseballStatsSection
            season="{data.stats.season}"
            statsBatting="{data.stats.batting}"
            statsPitching="{data.stats.pitching}"
            statsFielding="{data.stats.fielding}"
    />
    <div class="divider my-8"></div>
    <TeamHeroSection/>
</div>