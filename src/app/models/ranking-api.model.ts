export interface RankingApiAthlete {
  position: number;
  name: string;
  points: number;
}

export interface RankingApiCategory {
  categoryId: number;
  categoryName: string;
  athletes: RankingApiAthlete[];
}

export interface RankingApiResponse {
  championshipId: number;
  serieId: number;
  categories: RankingApiCategory[];
}
