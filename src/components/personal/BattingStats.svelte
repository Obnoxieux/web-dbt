<script lang="ts">
    import type {BattingStatisticsEntry} from "$lib/model/BattingStatisticsEntry";

    export let statsBatting: BattingStatisticsEntry;
</script>

<div class="stats stats-vertical md:stats-horizontal shadow-md border">
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

<div class="overflow-x-auto shadow-md rounded-2xl border">
    <table class="table">
        <!-- head -->
        <thead>
        <tr>
            <th></th>
            <th>Player</th>
            <th>G</th>
            <th>GS</th>
            <th>PA</th>
            <th>AB</th>
            <th>R</th>
            <th>RBI</th>
            <th>H</th>
            <th>2B</th>
            <th>3B</th>
            <th>HR</th>
            <th>K</th>
            <th>BB</th>
            <th>IBB</th>
            <th>HP</th>
            <th>SB</th>
            <th>CS</th>
            <th>SH</th>
            <th>SF</th>
            <th>I</th>
        </tr>
        </thead>
        <tbody>
        <!-- row 1 -->
        <tr>
            <th>1</th>
            <td>David</td>
            <td>{statsBatting.summaries[0].values.games}</td>
            <td>{statsBatting.summaries[0].values.games_started}</td>
            <td>{statsBatting.summaries[0].values.plate_appearances}</td>
            <td>{statsBatting.summaries[0].values.at_bats}</td>
            <td>{statsBatting.summaries[0].values.runs}</td>
            <td>{statsBatting.summaries[0].values.runs_batted_in}</td>
            <td>{statsBatting.summaries[0].values.hits}</td>
            <td>{statsBatting.summaries[0].values.doubles}</td>
            <td>{statsBatting.summaries[0].values.triples}</td>
            <td>{statsBatting.summaries[0].values.homeruns}</td>
            <td>{statsBatting.summaries[0].values.strikeouts}</td>
            <td>{statsBatting.summaries[0].values.base_on_balls}</td>
            <td>{statsBatting.summaries[0].values.intentional_base_on_balls}</td>
            <td>{statsBatting.summaries[0].values.hit_by_pitches}</td>
            <td>{statsBatting.summaries[0].values.stolen_bases}</td>
            <td>{statsBatting.summaries[0].values.caught_stealings}</td>
            <td>{statsBatting.summaries[0].values.sacrifice_hits}</td>
            <td>{statsBatting.summaries[0].values.sacrifice_flys}</td>
            <td>{statsBatting.summaries[0].values.interferences}</td>
        </tr>
        </tbody>
    </table>
</div>