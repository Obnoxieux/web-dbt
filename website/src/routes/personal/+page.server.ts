import type {PageServerLoad} from "../../../.svelte-kit/types/src/routes/personal/$types";
import type {BattingStatisticsEntry} from "$lib/model/BattingStatisticsEntry";
import {BSMAPIRequest} from "$lib/classes/BSMAPIRequest";
import {StatsType} from "$lib/enums/StatsType";
import type {PitchingStatisticsEntry} from "$lib/model/PitchingStatisticsEntry";
import type {FieldingStatisticsEntry} from "$lib/model/FieldingStatisticsEntry";

export const load = (async () => {
    const request = new BSMAPIRequest()

    const itemBatting: BattingStatisticsEntry = await request.loadPersonalStatistics(StatsType.batting)
    const itemPitching: PitchingStatisticsEntry = await request.loadPersonalStatistics(StatsType.pitching)
    const itemFielding: FieldingStatisticsEntry = await request.loadPersonalStatistics(StatsType.fielding)

    const stats = {
        batting: itemBatting,
        pitching: itemPitching,
        fielding: itemFielding,
    }
    return { stats }
}) satisfies PageServerLoad