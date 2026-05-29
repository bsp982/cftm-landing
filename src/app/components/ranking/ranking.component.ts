import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RankingGender, RankingGroup } from '../../models/ranking.model';
import { RankingService } from '../../services/ranking.service';

@Component({
  selector: 'app-ranking',
  standalone: true,
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss',
})
export class RankingComponent implements OnInit {
  private readonly rankingService = inject(RankingService);
  private readonly destroyRef = inject(DestroyRef);

  readonly rankingGroups = signal<RankingGroup[]>([]);
  readonly loading = signal(true);
  readonly loadError = signal(false);

  readonly activeGender = signal<RankingGender>('masculino');
  readonly activeCategory = signal<string>('');

  private tabsInitialized = false;

  readonly activeGroup = computed(() => {
    const groups = this.rankingGroups();
    return groups.find((g) => g.gender === this.activeGender()) ?? groups[0];
  });

  readonly categories = computed(() => this.activeGroup()?.categories ?? []);

  readonly activeRanking = computed(() => {
    const cats = this.categories();
    const selected = cats.find((c) => c.id === this.activeCategory());
    return selected ?? cats[0];
  });

  readonly showCity = computed(() =>
    (this.activeRanking()?.standings ?? []).some((row) => !!row.city?.trim())
  );

  ngOnInit(): void {
    this.rankingService
      .watchRankingGroups()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (groups) => {
          this.rankingGroups.set(groups);
          this.loading.set(false);
          this.loadError.set(false);
          if (!this.tabsInitialized && groups.length > 0) {
            this.tabsInitialized = true;
            const firstGroup = groups[0];
            this.activeGender.set(firstGroup.gender);
            this.activeCategory.set(firstGroup.categories[0]?.id ?? '');
          }
        },
        error: () => {
          this.loading.set(false);
          if (this.rankingGroups().length === 0) {
            this.loadError.set(true);
          }
        },
      });
  }

  selectGender(gender: RankingGender): void {
    this.activeGender.set(gender);
    const first = this.rankingGroups().find((g) => g.gender === gender)?.categories[0];
    if (first) {
      this.activeCategory.set(first.id);
    }
  }

  selectCategory(id: string): void {
    this.activeCategory.set(id);
  }

  retryLoad(): void {
    this.loading.set(true);
    this.loadError.set(false);
    this.rankingService.reloadRanking();
  }
}
