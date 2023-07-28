<script lang="ts">
    import type {BattingStatisticsEntry} from "$lib/model/BattingStatisticsEntry";
    import type {PitchingStatisticsEntry} from "$lib/model/PitchingStatisticsEntry";

    export let statsBatting: BattingStatisticsEntry;
    export let statsPitching: PitchingStatisticsEntry
</script>

<p>{statsBatting.summaries[0].values.batting_average}</p>
<p>{statsBatting.summaries[0].values.hits}</p>
<p>{statsPitching.summaries[0].values.type}</p>