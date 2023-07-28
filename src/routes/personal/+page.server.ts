import type {PageServerLoad} from "../../../.svelte-kit/types/src/routes/personal/$types";
import type {BattingStatisticsEntry} from "$lib/model/BattingStatisticsEntry";
import {BSMAPIRequest} from "$lib/classes/BSMAPIRequest";
import {StatsType} from "$lib/enums/StatsType";
import type {PitchingStatisticsEntry} from "$lib/model/PitchingStatisticsEntry";

export const load = (async ({params }) => {
    const request = new BSMAPIRequest()

    const itemBatting: BattingStatisticsEntry = await request.loadPersonalStatistics(StatsType.batting)
    const itemPitching: PitchingStatisticsEntry = await request.loadPersonalStatistics(StatsType.pitching)

    const stats = {
        batting: itemBatting,
        pitching: itemPitching,
    }
    return { stats }
}) satisfies PageServerLoad