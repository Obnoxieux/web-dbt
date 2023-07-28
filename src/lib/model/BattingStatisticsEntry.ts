export interface BattingStatisticsEntry {
    summaries: BattingStatsSummary[]
}

interface BattingStatsSummary {
    values: BattingSummaryValues
}

interface BattingSummaryValues {
    type: string;
    games: number;
    games_started: number;
    plate_appearances: number;
    at_bats: number;
    runs: number;
    runs_batted_in: number;
    hits: number;
    doubles: number;
    triples: number;
    homeruns: number;
    strikeouts: number;
    base_on_balls: number;
    intentional_base_on_balls: number;
    hit_by_pitches: number;
    stolen_bases: number;
    caught_stealings: number;
    sacrifice_hits: number;
    sacrifice_flys: number;
    interferences: number;
    batting_average: string;
    on_base_percentage: string;
    slugging_percentage: string;
    on_base_plus_slugging: string;
}