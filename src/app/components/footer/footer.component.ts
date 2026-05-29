import { Component } from '@angular/core';
import { APP_VERSION } from '../../config/app-version';
import { SITE } from '../../data/site.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly site = SITE;
  readonly year = new Date().getFullYear();
  readonly appVersion = APP_VERSION;
}
