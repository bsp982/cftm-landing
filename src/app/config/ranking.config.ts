/**
 * Origem dos dados: https://prod.socialsport.com.br/public/campeonatos/6/rankings
 *
 * O navegador chama via mesmo domínio (/api/socialsport/...) para evitar bloqueio CORS;
 * em dev o ng serve faz proxy; em produção use public/_redirects (Netlify) ou equivalente.
 */
export const RANKINGS_API_URL = '/api/socialsport/public/campeonatos/6/rankings';

/** Atualização automática do ranking (horário local do usuário). */
export const RANKING_REFRESH_HOUR = 8;
export const RANKING_REFRESH_MINUTE = 0;
