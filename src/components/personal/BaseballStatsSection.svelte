<script lang="ts">
    import type {BattingStatisticsEntry} from "$lib/model/BattingStatisticsEntry";
    import type {PitchingStatisticsEntry} from "$lib/model/PitchingStatisticsEntry";
    import {StatsType} from "$lib/enums/StatsType";
    import BattingStats from "./BattingStats.svelte";

    export let statsBatting: BattingStatisticsEntry;
    export let statsPitching: PitchingStatisticsEntry

    let activeStatsTab = StatsType.batting

    function changeStatsTab(type: StatsType) {
        activeStatsTab = type
    }
</script>

<div class="flex flex-col gap-10">
    <div>
        <h2 class="h2 mb-2">My Stats</h2>
        <p>Baseball is a sport all about numbers. Here are mine for the current season.</p>
    </div>
    <div class="tabs tabs-boxed justify-around my-2 shadow-md">
        <button on:click={() => changeStatsTab(StatsType.batting)} class="tab grow {activeStatsTab === StatsType.batting ? 'tab-active' : ''}">Batting</button>
        <button on:click={() => changeStatsTab(StatsType.pitching)} class="tab grow {activeStatsTab === StatsType.pitching ? 'tab-active' : ''}">Pitching</button>
        <button on:click={() => changeStatsTab(StatsType.fielding)} class="tab grow {activeStatsTab === StatsType.fielding ? 'tab-active' : ''}">Fielding</button>
    </div>

    {#if activeStatsTab === StatsType.batting}
        <BattingStats {statsBatting}/>
    {:else if activeStatsTab === StatsType.pitching}
        <p>{statsPitching.summaries[0].values.type}</p>
    {:else}
        <p>Fielding Stats</p>
    {/if}
</div>


<style>
    .tabs-boxed .tab-active:not(.tab-disabled):not([disabled]) {
        @apply bg-yellow-400 text-black;
    }
</style>