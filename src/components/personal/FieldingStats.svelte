<script lang="ts">
    import type {FieldingStatisticsEntry} from "$lib/model/FieldingStatisticsEntry";

    interface Props {
        statsFielding: FieldingStatisticsEntry;
    }

    let { statsFielding }: Props = $props();
</script>

{#if statsFielding.summaries.length > 0}
    <div class="stats stats-vertical md:stats-horizontal shadow-md border">
        <div class="stat">
            <div class="stat-title">G</div>
            <div class="stat-value">
                {statsFielding.summaries[0].values.games}
            </div>
            <div class="stat-desc">Games</div>
        </div>
        <div class="stat">
            <div class="stat-title">IP</div>
            <div class="stat-value">
                {statsFielding.summaries[0].values.innings_played}
            </div>
            <div class="stat-desc">Innings Played</div>
        </div>
        <div class="stat">
            <div class="stat-title">AVG</div>
            <div class="stat-value">
                {statsFielding.summaries[0].values.fielding_average}
            </div>
            <div class="stat-desc">Fielding Average</div>
        </div>
    </div>

    <div class="overflow-x-auto shadow-md rounded-2xl border">
        <table class="table">
            <!-- head -->
            <thead>
            <tr>
                <th></th>
                <th>Player</th>
                <th>G</th>
                <th>GS</th>
                <th>A</th>
                <th>PO</th>
                <th>E</th>
                <th>DP</th>
                <th>TP</th>
                <th>PB</th>
                <th>SB</th>
                <th>CS</th>
            </tr>
            </thead>
            <tbody>
            <!-- row 1 -->
            <tr>
                <th>1</th>
                <td>David</td>
                <td>{statsFielding.summaries[0].values.games}</td>
                <td>{statsFielding.summaries[0].values.games_started}</td>
                <td>{statsFielding.summaries[0].values.assists}</td>
                <td>{statsFielding.summaries[0].values.putouts}</td>
                <td>{statsFielding.summaries[0].values.errors}</td>
                <td>{statsFielding.summaries[0].values.double_plays}</td>
                <td>{statsFielding.summaries[0].values.triple_plays}</td>
                <td>{statsFielding.summaries[0].values.passed_balls}</td>
                <td>{statsFielding.summaries[0].values.stolen_bases}</td>
                <td>{statsFielding.summaries[0].values.caught_stealings}</td>
            </tr>
            </tbody>
        </table>
    </div>
<!--    <p>Add position chart here</p>-->
{:else}
    <p>There seems to be no data available for the time being.</p>
{/if}