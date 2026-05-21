import { Component, computed, signal } from '@angular/core';
import { RANKING_GROUPS } from '../../data/rankings.data';
import { RankingCategory, RankingGender } from '../../models/ranking.model';

@Component({
  selector: 'app-ranking',
  standalone: true,
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss',
})
export class RankingComponent {
  readonly rankingGroups = RANKING_GROUPS;
  readonly activeGender = signal<RankingGender>('masculino');
  readonly activeCategory = signal<RankingCategory>('m-principiante');

  readonly activeGroup = computed(
    () => this.rankingGroups.find((g) => g.gender === this.activeGender()) ?? this.rankingGroups[0]
  );

  readonly categories = computed(() => this.activeGroup().categories);

  readonly activeRanking = computed(() => {
    const cat = this.categories().find((c) => c.id === this.activeCategory());
    return cat ?? this.categories()[0];
  });

  selectGender(gender: RankingGender): void {
    this.activeGender.set(gender);
    const first = this.rankingGroups.find((g) => g.gender === gender)?.categories[0];
    if (first) {
      this.activeCategory.set(first.id);
    }
  }

  selectCategory(id: RankingCategory): void {
    this.activeCategory.set(id);
  }
}
