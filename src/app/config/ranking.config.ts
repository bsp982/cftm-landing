/**
 * Fonte externa (Social Sport) — onde o cliente mantém o ranking:
 * https://prod.socialsport.com.br/public/campeonatos/6/rankings
 */
export const RANKINGS_SOURCE_URL =
  'https://prod.socialsport.com.br/public/campeonatos/6/rankings';

/**
 * URL usada pelo app no navegador. Não é API do CFTM: a Vercel (vercel.json) e o
 * proxy local (proxy.conf.json) repassam para RANKINGS_SOURCE_URL e evitam CORS.
 */
export const RANKINGS_API_URL = '/api/socialsport/public/campeonatos/6/rankings';

/** Atualização automática do ranking (horário local do usuário). */
export const RANKING_REFRESH_HOUR = 8;
export const RANKING_REFRESH_MINUTE = 0;
