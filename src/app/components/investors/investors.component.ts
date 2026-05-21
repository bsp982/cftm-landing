import { Component } from '@angular/core';
import { INVESTOR_HIGHLIGHTS, SITE } from '../../data/site.data';

@Component({
  selector: 'app-investors',
  standalone: true,
  templateUrl: './investors.component.html',
  styleUrl: './investors.component.scss',
})
export class InvestorsComponent {
  readonly highlights = INVESTOR_HIGHLIGHTS;
  readonly site = SITE;
}
