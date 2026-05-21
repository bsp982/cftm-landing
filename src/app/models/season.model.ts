import { RankingGroup } from './ranking.model';

export type SeasonStatus = 'em-andamento' | 'concluida' | 'planejada';

export interface SeasonStage {
  number: number;
  title: string;
  dates: string;
  venue: string;
}

export interface SeasonSponsor {
  tier: string;
  names: string[];
}

export interface SeasonSummary {
  year: string;
  title: string;
  subtitle: string;
  status: SeasonStatus;
  stageCount: number;
}

export interface SeasonDetail extends SeasonSummary {
  stages: SeasonStage[];
  sponsors: SeasonSponsor[];
  finalRankings: RankingGroup[];
}
