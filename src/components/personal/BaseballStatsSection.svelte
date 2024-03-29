<script lang="ts">
    import type {BattingStatisticsEntry} from "$lib/model/BattingStatisticsEntry";
    import type {PitchingStatisticsEntry} from "$lib/model/PitchingStatisticsEntry";
    import {StatsType} from "$lib/enums/StatsType";
    import BattingStats from "./BattingStats.svelte";
    import PitchingStats from "./PitchingStats.svelte";
    import type {FieldingStatisticsEntry} from "$lib/model/FieldingStatisticsEntry";
    import FieldingStats from "./FieldingStats.svelte";
    import {slide} from 'svelte/transition';
    import {cubicIn} from "svelte/easing";

    export let statsBatting: BattingStatisticsEntry;
    export let statsPitching: PitchingStatisticsEntry;
    export let statsFielding: FieldingStatisticsEntry;
    export let season: number;

    let activeStatsTab = StatsType.batting

    function changeStatsTab(type: StatsType) {
        activeStatsTab = type
    }
</script>

<div class="max-w-xs sm:max-w-sm md:max-w-4xl lg:max-w-full">
    <div class="flex flex-col gap-10">
        <div class="max-w-3xl space-y-6">
            <h2 class="h2 mb-2">My Stats ({season} season)</h2>
            <p>Baseball is a sport all about numbers. These are mine. Data is imported automatically via the <a class="link" href="https://bsm.baseball-softball.de/api_docs" target="_blank">API of the German Baseball & Softball Association</a>.</p>
        </div>
        <div class="tabs tabs-boxed flex justify-around my-2 shadow-md">
            <button on:click={() => changeStatsTab(StatsType.batting)} class="tab grow {activeStatsTab === StatsType.batting ? 'tab-active' : ''}">Batting</button>
            <button on:click={() => changeStatsTab(StatsType.pitching)} class="tab grow {activeStatsTab === StatsType.pitching ? 'tab-active' : ''}">Pitching</button>
            <button on:click={() => changeStatsTab(StatsType.fielding)} class="tab grow {activeStatsTab === StatsType.fielding ? 'tab-active' : ''}">Fielding</button>
        </div>

        {#key activeStatsTab}
        <div in:slide={{easing: cubicIn}} class="flex flex-col gap-10">
            {#if activeStatsTab === StatsType.batting}
                    <BattingStats {statsBatting}/>
            {:else if activeStatsTab === StatsType.pitching}
                    <PitchingStats {statsPitching}/>
            {:else}
                    <FieldingStats {statsFielding}/>
            {/if}
        </div>
        {/key}
    </div>
</div>

<style>
    .tabs-boxed .tab-active:not(.tab-disabled):not([disabled]) {
        @apply bg-[#ba0c2f] text-white;
    }
</style>