import { Component, computed, signal } from '@angular/core';
import { getSeasonDetail, SEASON_SUMMARIES } from '../../data/seasons.data';
import { EditionDetailComponent } from './edition-detail.component';

@Component({
  selector: 'app-editions',
  standalone: true,
  imports: [EditionDetailComponent],
  templateUrl: './editions.component.html',
  styleUrl: './editions.component.scss',
})
export class EditionsComponent {
  readonly seasons = SEASON_SUMMARIES;
  readonly selectedYear = signal<string | null>(null);

  readonly selectedSeason = computed(() => {
    const year = this.selectedYear();
    return year ? getSeasonDetail(year) : undefined;
  });

  openSeason(year: string): void {
    if (!getSeasonDetail(year)) {
      return;
    }
    this.selectedYear.set(year);
    document.getElementById('edicoes')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  closeSeason(): void {
    this.selectedYear.set(null);
    document.getElementById('edicoes')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
