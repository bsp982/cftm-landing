import { Observable, timer } from 'rxjs';
import { RANKING_REFRESH_HOUR, RANKING_REFRESH_MINUTE } from '../config/ranking.config';

const MS_PER_DAY = 24 * 60 * 60 * 1000;

/** Milissegundos até o próximo horário local (ex.: 08:00). */
export function msUntilNextLocalTime(hour: number, minute: number): number {
  const now = new Date();
  const next = new Date(now);
  next.setHours(hour, minute, 0, 0);
  if (next.getTime() <= now.getTime()) {
    next.setDate(next.getDate() + 1);
  }
  return next.getTime() - now.getTime();
}

/** Dispara às 8h (horário local do navegador) e a cada 24 horas depois. */
export function dailyRankingRefreshSchedule(): Observable<number> {
  const delay = msUntilNextLocalTime(RANKING_REFRESH_HOUR, RANKING_REFRESH_MINUTE);
  return timer(delay, MS_PER_DAY);
}
