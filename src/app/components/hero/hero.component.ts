import { Component } from '@angular/core';
import { HERO_STATS, SITE } from '../../data/site.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly site = SITE;
  readonly stats = HERO_STATS;

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
