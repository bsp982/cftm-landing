/** Campeonato CFTM na Social Sport (série 6). */
export const RANKING_CHAMPIONSHIP_ID = 6;

/**
 * Caminho relativo: em dev o `ng serve` faz proxy para prod.socialsport.com.br;
 * em produção, configure o mesmo rewrite no host (ex.: `public/_redirects`).
 */
export const RANKINGS_API_URL = `/api/socialsport/public/campeonatos/${RANKING_CHAMPIONSHIP_ID}/rankings`;
