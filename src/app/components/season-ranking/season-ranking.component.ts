import { Component, computed, input, signal } from '@angular/core';
import { RankingGender, RankingGroup } from '../../models/ranking.model';

@Component({
  selector: 'app-season-ranking',
  standalone: true,
  templateUrl: './season-ranking.component.html',
  styleUrl: './season-ranking.component.scss',
})
export class SeasonRankingComponent {
  readonly rankingGroups = input.required<RankingGroup[]>();

  readonly activeGender = signal<RankingGender>('masculino');
  readonly activeCategory = signal<string>('m-principiante');

  readonly activeGroup = computed(() => {
    const groups = this.rankingGroups();
    return groups.find((g) => g.gender === this.activeGender()) ?? groups[0];
  });

  readonly categories = computed(() => this.activeGroup().categories);

  readonly activeRanking = computed(() => {
    const cat = this.categories().find((c) => c.id === this.activeCategory());
    return cat ?? this.categories()[0];
  });

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
}
