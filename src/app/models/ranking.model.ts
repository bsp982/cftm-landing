export type RankingGender = 'masculino' | 'feminino' | 'misto';

export type RankingCategory =
  | 'm-principiante'
  | 'm-iniciante'
  | 'm-serie-c'
  | 'm-serie-b'
  | 'm-serie-a'
  | 'f-iniciante-b'
  | 'f-iniciante-a'
  | 'f-serie-c'
  | 'f-serie-b';

export interface AthleteRanking {
  position: number;
  name: string;
  city?: string;
  points: number;
}

export interface CategoryRanking {
  id: string;
  label: string;
  season: string;
  lastUpdated: string;
  standings: AthleteRanking[];
}

export interface RankingGroup {
  gender: RankingGender;
  genderLabel: string;
  categories: CategoryRanking[];
}
