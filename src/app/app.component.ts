import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { EditionsComponent } from './components/editions/editions.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { InvestorsComponent } from './components/investors/investors.component';
import { RankingComponent } from './components/ranking/ranking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    InvestorsComponent,
    RankingComponent,
    EditionsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
