import {AbstractAPIRequest} from "$lib/classes/AbstractAPIRequest";
import type {StatsType} from "$lib/enums/StatsType";
import type {BaseballStatisticsEntry} from "$lib/model/BaseballStatisticsEntry";

export class BSMAPIRequest extends AbstractAPIRequest {
    API_URL = "https://bsm.baseball-softball.de"
    protected readonly bsmPersonID: number = 76222
    season = 2023


    protected buildURL(statsType: StatsType, season?: number): string {
        const currentSeason: string = "2023"
        // let searchTerm = ''
        // if (search !== undefined && search !== null) {
        //     searchTerm = `&search=${search}`
        // }

        const url = `${this.API_URL}/people/${this.bsmPersonID}/statistics/${statsType}.json?filters[seasons][]=${currentSeason}`
        return url
    }

    async loadPersonalStatistics(statsType: StatsType, season?: number): Promise<BaseballStatisticsEntry> {
        const url = this.buildURL(statsType, season)
        const response = await this.fetchJSONData(url)

        return response as BaseballStatisticsEntry
    }
}