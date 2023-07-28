<script lang="ts">
    import type {BattingStatisticsEntry} from "$lib/model/BattingStatisticsEntry";

    export let itemBatting: BattingStatisticsEntry;
</script>

<p>{itemBatting.summaries[0].values.batting_average}</p>
<p>{itemBatting.summaries[0].values.hits}</p>