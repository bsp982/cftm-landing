import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { RANKINGS_API_URL } from '../config/ranking.config';
import { RankingApiResponse } from '../models/ranking-api.model';
import { RankingGroup } from '../models/ranking.model';
import { mapRankingApiToGroups } from './ranking.mapper';

@Injectable({ providedIn: 'root' })
export class RankingService {
  private readonly http = inject(HttpClient);

  loadRankingGroups(): Observable<RankingGroup[]> {
    return this.http.get<RankingApiResponse>(RANKINGS_API_URL).pipe(
      map((response) => mapRankingApiToGroups(response))
    );
  }
}
