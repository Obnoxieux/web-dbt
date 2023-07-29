<script lang="ts">
    import type {BattingStatisticsEntry} from "$lib/model/BattingStatisticsEntry";

    export let statsBatting: BattingStatisticsEntry;
</script>

<div class="stats stats-vertical md:stats-horizontal shadow">
    <div class="stat">
        <div class="stat-title">AVG</div>
        <div class="stat-value">
            {statsBatting.summaries[0].values.batting_average}
        </div>
        <div class="stat-desc">Batting Average</div>
    </div>
    <div class="stat">
        <div class="stat-title">OBP</div>
        <div class="stat-value">
            {statsBatting.summaries[0].values.on_base_percentage}
        </div>
        <div class="stat-desc">On Base Percentage</div>
    </div>
    <div class="stat">
        <div class="stat-title">SLG</div>
        <div class="stat-value">
            {statsBatting.summaries[0].values.slugging_percentage}
        </div>
        <div class="stat-desc">Slugging Percentage</div>
    </div>
    <div class="stat">
        <div class="stat-title">OPS</div>
        <div class="stat-value">
            {statsBatting.summaries[0].values.on_base_plus_slugging}
        </div>
        <div class="stat-desc">On Base Plus Slugging</div>
    </div>
</div>