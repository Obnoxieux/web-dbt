import type {PageServerLoad} from "../../../.svelte-kit/types/src/routes/personal/$types";
import type {BaseballStatisticsEntry} from "$lib/model/BaseballStatisticsEntry";
import {BSMAPIRequest} from "$lib/classes/BSMAPIRequest";
import {StatsType} from "$lib/enums/StatsType";

export const load = (async ({params }) => {
    const request = new BSMAPIRequest()

    const itemBatting: BaseballStatisticsEntry = await request.loadPersonalStatistics(StatsType.batting)
    const itemPitching = 42

    return { itemBatting }
}) satisfies PageServerLoad