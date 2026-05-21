import { RankingGroup } from '../models/ranking.model';
import { SeasonDetail, SeasonSummary } from '../models/season.model';
import { RANKING_GROUPS } from './rankings.data';

function finalRankingsForYear(year: string): RankingGroup[] {
  return RANKING_GROUPS.map((group) => ({
    ...group,
    categories: group.categories.map((cat) => ({
      ...cat,
      season: year,
      lastUpdated: `Ranking final · ${year}`,
      standings: cat.standings.map((row) => ({ ...row })),
    })),
  }));
}

export const SEASON_SUMMARIES: SeasonSummary[] = [
  {
    year: '2026',
    title: 'Temporada em andamento',
    subtitle: '2 etapas confirmadas · Triângulo Mineiro',
    status: 'em-andamento',
    stageCount: 2,
  },
  {
    year: '2025',
    title: '15ª Temporada',
    subtitle: '6 etapas · Triângulo Mineiro',
    status: 'concluida',
    stageCount: 6,
  },
  {
    year: '2024',
    title: '14ª Temporada',
    subtitle: '5 etapas · Triângulo Mineiro',
    status: 'concluida',
    stageCount: 5,
  },
];

export const SEASONS: Record<string, SeasonDetail> = {
  '2026': {
    ...SEASON_SUMMARIES[0],
    stages: [
      {
        number: 1,
        title: '1ª Etapa — Abril',
        dates: '17, 18 e 19/04',
        venue: 'Arena Branco',
      },
      {
        number: 2,
        title: '2ª Etapa — Maio',
        dates: '29, 30 e 31/05',
        venue: 'Complexo Match Point',
      },
    ],
    sponsors: [
      {
        tier: 'Patrocinadores',
        names: [
          'Café Cajuba',
          'PowerADE',
          'Focco Sport',
          'Happy Pizza',
          'Arena X',
          'Sérvio Tulio',
          'Ortop Fisio',
          'TopWay',
          'Vandão Fogos',
          'Açaí Tribo Mix',
          'FH Cell',
          'Atom',
        ],
      },
      {
        tier: 'Arenas',
        names: ['Arena Branco', 'Complexo Match Point'],
      },
    ],
    finalRankings: finalRankingsForYear('2026'),
  },
  '2025': {
    ...SEASON_SUMMARIES[1],
    stages: [
      {
        number: 1,
        title: '1ª Etapa — Março',
        dates: '28, 29 e 30/03',
        venue: 'Ilha Beach Club · Araguari',
      },
      {
        number: 2,
        title: '2ª Etapa — Maio',
        dates: '23, 24 e 25/05',
        venue: 'Arena OKA',
      },
      {
        number: 3,
        title: '3ª Etapa — Julho',
        dates: '26 e 27/07',
        venue: 'Arena Branco',
      },
      {
        number: 4,
        title: '4ª Etapa — Setembro',
        dates: '12, 13 e 14/09',
        venue: 'Arena Verona',
      },
      {
        number: 5,
        title: '5ª Etapa — Outubro/Novembro',
        dates: '08 e 09/11',
        venue: 'Itororó Clube',
      },
      {
        number: 6,
        title: '6ª Etapa — Dezembro',
        dates: '06 e 07/12',
        venue: 'Parque do Sabiá',
      },
    ],
    sponsors: [
      { tier: 'Patrocínio Master', names: ['A definir'] },
      {
        tier: 'Patrocínio de Etapa',
        names: [
          'Ilha Beach Club',
          'Arena OKA',
          'Arena Branco',
          'Arena Verona',
          'Itororó Clube',
          'Parque do Sabiá',
        ],
      },
      { tier: 'Apoiadores', names: ['Em atualização'] },
    ],
    finalRankings: finalRankingsForYear('2025'),
  },
  '2024': {
    ...SEASON_SUMMARIES[2],
    stages: [
      {
        number: 1,
        title: 'Edição 1',
        dates: '16 e 17/03',
        venue: 'Arena Verona Beach',
      },
      {
        number: 2,
        title: 'Edição 2',
        dates: '27 e 28/04',
        venue: 'Arena Pé na Areia',
      },
      {
        number: 3,
        title: 'Edição 3',
        dates: '22 e 23/07',
        venue: 'Arena OKA',
      },
      {
        number: 4,
        title: 'Edição 4',
        dates: '24 e 25/09',
        venue: 'Clube do Pica-Pau',
      },
      {
        number: 5,
        title: 'Edição 5',
        dates: '09 e 10/11',
        venue: 'Arena X',
      },
    ],
    sponsors: [
      { tier: 'Patrocínio Master', names: ['A definir'] },
      {
        tier: 'Patrocínio de Etapa',
        names: [
          'Arena Verona Beach',
          'Arena Pé na Areia',
          'Arena OKA',
          'Clube do Pica-Pau',
          'Arena X',
        ],
      },
      { tier: 'Apoiadores', names: ['Em atualização'] },
    ],
    finalRankings: finalRankingsForYear('2024'),
  },
};

export function getSeasonDetail(year: string): SeasonDetail | undefined {
  return SEASONS[year];
}
