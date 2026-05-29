import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, merge, of, shareReplay, switchMap, map } from 'rxjs';
import { RANKINGS_API_URL } from '../config/ranking.config';
import { RankingApiResponse } from '../models/ranking-api.model';
import { RankingGroup } from '../models/ranking.model';
import { dailyRankingRefreshSchedule } from './ranking-schedule';
import { mapRankingApiToGroups } from './ranking.mapper';

@Injectable({ providedIn: 'root' })
export class RankingService {
  private readonly http = inject(HttpClient);
  private readonly manualReload$ = new Subject<void>();

  /** Carga imediata + novo request todo dia às 8h (horário local). */
  private readonly rankingGroups$ = merge(of(0), dailyRankingRefreshSchedule(), this.manualReload$).pipe(
    switchMap(() => this.fetchRankingGroups()),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  watchRankingGroups(): Observable<RankingGroup[]> {
    return this.rankingGroups$;
  }

  reloadRanking(): void {
    this.manualReload$.next();
  }

  private fetchRankingGroups(): Observable<RankingGroup[]> {
    return this.http
      .get<RankingApiResponse>(RANKINGS_API_URL)
      .pipe(map((response) => mapRankingApiToGroups(response)));
  }
}
