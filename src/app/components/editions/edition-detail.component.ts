import { Component, input, output } from '@angular/core';
import { SeasonDetail } from '../../models/season.model';
import { SeasonRankingComponent } from '../season-ranking/season-ranking.component';

@Component({
  selector: 'app-edition-detail',
  standalone: true,
  imports: [SeasonRankingComponent],
  templateUrl: './edition-detail.component.html',
  styleUrl: './edition-detail.component.scss',
})
export class EditionDetailComponent {
  readonly season = input.required<SeasonDetail>();
  readonly back = output<void>();
}
