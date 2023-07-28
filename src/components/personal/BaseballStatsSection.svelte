<script lang="ts">
    import type {BaseballStatisticsEntry} from "$lib/model/BaseballStatisticsEntry";

    export let itemBatting: BaseballStatisticsEntry;
</script>

<p>{itemBatting.summaries[0].values.batting_average}</p>
<p>{itemBatting.summaries[0].values.hits}</p>