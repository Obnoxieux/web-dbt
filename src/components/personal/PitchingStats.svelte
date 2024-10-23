<script lang="ts">
    import type {PitchingStatisticsEntry} from "$lib/model/PitchingStatisticsEntry";

    interface Props {
        statsPitching: PitchingStatisticsEntry;
    }

    let { statsPitching }: Props = $props();
</script>

{#if statsPitching.summaries.length > 0}
    <div class="stats stats-vertical md:stats-horizontal shadow-md border">
        <div class="stat">
            <div class="stat-title">W - L</div>
            <div class="stat-value">
                {`${statsPitching.summaries[0].values.wins} - ${statsPitching.summaries[0].values.losses}`}
            </div>
            <div class="stat-desc">Record</div>
        </div>
        <div class="stat">
            <div class="stat-title">IP</div>
            <div class="stat-value">
                {statsPitching.summaries[0].values.innings_pitched}
            </div>
            <div class="stat-desc">Innings Pitched</div>
        </div>
        <div class="stat">
            <div class="stat-title">ERA</div>
            <div class="stat-value">
                {statsPitching.summaries[0].values.earned_runs_average}
            </div>
            <div class="stat-desc">Earned Run Average</div>
        </div>
        <div class="stat">
            <div class="stat-title">WHIP</div>
            <div class="stat-value">
                {statsPitching.summaries[0].values.walks_and_hits_per_innings_pitched}
            </div>
            <div class="stat-desc">Walks & Hits per Innings Pitched</div>
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
                <th>BF</th>
                <th>AB</th>
                <th>R</th>
                <th>ER</th>
                <th>H</th>
                <th>2B</th>
                <th>3B</th>
                <th>HR</th>
                <th>K</th>
                <th>BB</th>
                <th>IBB</th>
                <th>HP</th>
                <th>WP</th>
                <th>I</th>
                <th>BK</th>
                <th>SV</th>
            </tr>
            </thead>
            <tbody>
            <!-- row 1 -->
            <tr>
                <th>1</th>
                <td>David</td>
                <td>{statsPitching.summaries[0].values.games}</td>
                <td>{statsPitching.summaries[0].values.games_started}</td>
                <td>{statsPitching.summaries[0].values.batters_faced}</td>
                <td>{statsPitching.summaries[0].values.at_bats}</td>
                <td>{statsPitching.summaries[0].values.runs}</td>
                <td>{statsPitching.summaries[0].values.earned_runs}</td>
                <td>{statsPitching.summaries[0].values.hits}</td>
                <td>{statsPitching.summaries[0].values.doubles}</td>
                <td>{statsPitching.summaries[0].values.triples}</td>
                <td>{statsPitching.summaries[0].values.homeruns}</td>
                <td>{statsPitching.summaries[0].values.strikeouts}</td>
                <td>{statsPitching.summaries[0].values.base_on_balls_allowed}</td>
                <td>{statsPitching.summaries[0].values.intentional_base_on_balls}</td>
                <td>{statsPitching.summaries[0].values.hit_by_pitches}</td>
                <td>{statsPitching.summaries[0].values.wild_pitches}</td>
                <td>{statsPitching.summaries[0].values.interferences}</td>
                <td>{statsPitching.summaries[0].values.balks}</td>
                <td>{statsPitching.summaries[0].values.saves}</td>
            </tr>
            </tbody>
        </table>
    </div>
{:else}
    <p>There seems to be no data available for the time being.</p>
{/if}