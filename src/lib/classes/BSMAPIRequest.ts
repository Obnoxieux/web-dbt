import {AbstractAPIRequest} from "$lib/classes/AbstractAPIRequest";
import type {StatsType} from "$lib/enums/StatsType";
import type {AbstractStatisticsEntry} from "$lib/model/AbstractStatisticsEntry";

export class BSMAPIRequest extends AbstractAPIRequest {
    API_URL = "https://bsm.baseball-softball.de"
    protected readonly bsmPersonID: number = 76222
    protected readonly defaultSeason = new Date().getFullYear()


    protected buildURL(statsType: StatsType, season?: number): string {
        const selectedSeason = season ?? this.defaultSeason
        // let searchTerm = ''
        // if (search !== undefined && search !== null) {
        //     searchTerm = `&search=${search}`
        // }

        return `${this.API_URL}/people/${this.bsmPersonID}/statistics/${statsType}.json?filters[seasons][]=${selectedSeason}`
    }

    async loadPersonalStatistics(statsType: StatsType, season?: number): Promise<AbstractStatisticsEntry> {
        const url = this.buildURL(statsType, season)
        const response = await this.fetchJSONData(url, undefined)

        return response as AbstractStatisticsEntry
    }
}