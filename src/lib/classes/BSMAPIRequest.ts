import {AbstractAPIRequest} from "$lib/classes/AbstractAPIRequest";
import type {StatsType} from "$lib/enums/StatsType";
import type {BattingStatisticsEntry} from "$lib/model/BattingStatisticsEntry";

export class BSMAPIRequest extends AbstractAPIRequest {
    API_URL = "https://bsm.baseball-softball.de"
    protected readonly bsmPersonID: number = 76222
    defaultSeason = 2023


    protected buildURL(statsType: StatsType, season?: number): string {
        const selectedSeason = season ?? this.defaultSeason
        // let searchTerm = ''
        // if (search !== undefined && search !== null) {
        //     searchTerm = `&search=${search}`
        // }

        const url = `${this.API_URL}/people/${this.bsmPersonID}/statistics/${statsType}.json?filters[seasons][]=${selectedSeason}`
        return url
    }

    async loadPersonalStatistics(statsType: StatsType, season?: number): Promise<BattingStatisticsEntry> {
        const url = this.buildURL(statsType, season)
        const response = await this.fetchJSONData(url)

        return response as BattingStatisticsEntry
    }
}