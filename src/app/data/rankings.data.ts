import { RankingGroup } from '../models/ranking.model';

const SEASON = '2025';
const LAST_UPDATED = '21/05/2025 18:30';

/** Ranking individual por atleta — edite nomes e pontos conforme a temporada */
export const RANKING_GROUPS: RankingGroup[] = [
  {
    gender: 'masculino',
    genderLabel: 'Masculino',
    categories: [
      {
        id: 'm-principiante',
        label: 'Principiante',
        season: SEASON,
        lastUpdated: LAST_UPDATED,
        standings: [
          { position: 1, name: 'Joaquim', city: 'Uberlândia', points: 280 },
          { position: 2, name: 'Carlos', city: 'Uberaba', points: 265 },
          { position: 3, name: 'Pedro', city: 'Araguari', points: 240 },
          { position: 4, name: 'Lucas', city: 'Ituiutaba', points: 220 },
          { position: 5, name: 'Rafael', city: 'Uberaba', points: 195 },
          { position: 6, name: 'João', city: 'Uberlândia', points: 10 },
        ],
      },
      {
        id: 'm-iniciante',
        label: 'Iniciante',
        season: SEASON,
        lastUpdated: LAST_UPDATED,
        standings: [
          { position: 1, name: 'Matheus', city: 'Uberlândia', points: 320 },
          { position: 2, name: 'Bruno', city: 'Uberaba', points: 305 },
          { position: 3, name: 'Felipe', city: 'Araguari', points: 290 },
          { position: 4, name: 'Gustavo', city: 'Patos de Minas', points: 275 },
          { position: 5, name: 'Diego', city: 'Ituiutaba', points: 250 },
        ],
      },
      {
        id: 'm-serie-c',
        label: 'Série C',
        season: SEASON,
        lastUpdated: LAST_UPDATED,
        standings: [
          { position: 1, name: 'André', city: 'Araguari', points: 365 },
          { position: 2, name: 'Thiago', city: 'Ituiutaba', points: 340 },
          { position: 3, name: 'Marcos', city: 'Patos de Minas', points: 312 },
          { position: 4, name: 'Paulo', city: 'Uberaba', points: 298 },
        ],
      },
      {
        id: 'm-serie-b',
        label: 'Série B',
        season: SEASON,
        lastUpdated: LAST_UPDATED,
        standings: [
          { position: 1, name: 'Ricardo', city: 'Uberaba', points: 398 },
          { position: 2, name: 'Eduardo', city: 'Uberlândia', points: 385 },
          { position: 3, name: 'Fábio', city: 'Araguari', points: 370 },
          { position: 4, name: 'Leandro', city: 'Ituiutaba', points: 355 },
        ],
      },
      {
        id: 'm-serie-a',
        label: 'Série A',
        season: SEASON,
        lastUpdated: LAST_UPDATED,
        standings: [
          { position: 1, name: 'Gabriel', city: 'Uberlândia', points: 420 },
          { position: 2, name: 'Henrique', city: 'Uberlândia', points: 410 },
          { position: 3, name: 'Vinícius', city: 'Uberaba', points: 398 },
          { position: 4, name: 'Rodrigo', city: 'Ituiutaba', points: 385 },
        ],
      },
    ],
  },
  {
    gender: 'feminino',
    genderLabel: 'Feminino',
    categories: [
      {
        id: 'f-iniciante-b',
        label: 'Iniciante B',
        season: SEASON,
        lastUpdated: LAST_UPDATED,
        standings: [
          { position: 1, name: 'Ana', city: 'Uberlândia', points: 270 },
          { position: 2, name: 'Julia', city: 'Uberaba', points: 255 },
          { position: 3, name: 'Mariana', city: 'Araguari', points: 240 },
          { position: 4, name: 'Beatriz', city: 'Ituiutaba', points: 225 },
        ],
      },
      {
        id: 'f-iniciante-a',
        label: 'Iniciante A',
        season: SEASON,
        lastUpdated: LAST_UPDATED,
        standings: [
          { position: 1, name: 'Camila', city: 'Uberaba', points: 310 },
          { position: 2, name: 'Larissa', city: 'Uberlândia', points: 295 },
          { position: 3, name: 'Fernanda', city: 'Araguari', points: 280 },
          { position: 4, name: 'Patrícia', city: 'Patos de Minas', points: 265 },
        ],
      },
      {
        id: 'f-serie-c',
        label: 'Série C (Intermediária)',
        season: SEASON,
        lastUpdated: LAST_UPDATED,
        standings: [
          { position: 1, name: 'Amanda', city: 'Uberlândia', points: 380 },
          { position: 2, name: 'Bruna', city: 'Uberaba', points: 365 },
          { position: 3, name: 'Carolina', city: 'Araguari', points: 350 },
          { position: 4, name: 'Daniela', city: 'Ituiutaba', points: 335 },
        ],
      },
      {
        id: 'f-serie-b',
        label: 'Série B (Avançada)',
        season: SEASON,
        lastUpdated: LAST_UPDATED,
        standings: [
          { position: 1, name: 'Isabela', city: 'Uberlândia', points: 415 },
          { position: 2, name: 'Letícia', city: 'Uberaba', points: 400 },
          { position: 3, name: 'Natália', city: 'Araguari', points: 385 },
          { position: 4, name: 'Raquel', city: 'Patos de Minas', points: 370 },
        ],
      },
    ],
  },
];
