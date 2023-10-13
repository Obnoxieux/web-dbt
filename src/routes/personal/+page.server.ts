import type {PageServerLoad} from "../../../.svelte-kit/types/src/routes/personal/$types";
import type {BattingStatisticsEntry} from "$lib/model/BattingStatisticsEntry";
import {BSMAPIRequest} from "$lib/classes/BSMAPIRequest";
import {StatsType} from "$lib/enums/StatsType";
import type {PitchingStatisticsEntry} from "$lib/model/PitchingStatisticsEntry";
import type {FieldingStatisticsEntry} from "$lib/model/FieldingStatisticsEntry";

export const load = (async ({params }) => {
    const request = new BSMAPIRequest()

    // if the month is January, February or March it is unlikely to have stats already, so show last year
    let season: number
    const currentDate = new Date()
    if (currentDate.getMonth() <= 2) {
        season = currentDate.getFullYear() - 1
    } else {
        season = currentDate.getFullYear()
    }

    const itemBatting: BattingStatisticsEntry = await request.loadPersonalStatistics(StatsType.batting, season)
    const itemPitching: PitchingStatisticsEntry = await request.loadPersonalStatistics(StatsType.pitching, season)
    const itemFielding: FieldingStatisticsEntry = await request.loadPersonalStatistics(StatsType.fielding, season)

    const stats = {
        season: season,
        batting: itemBatting,
        pitching: itemPitching,
        fielding: itemFielding,
    }
    return { stats }
}) satisfies PageServerLoad