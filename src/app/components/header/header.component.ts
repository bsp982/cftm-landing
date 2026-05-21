import { Component, HostListener, signal } from '@angular/core';
import { InstagramIconComponent } from '../icons/instagram-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InstagramIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    document.body.style.overflow = '';
  }

  scrollTo(id: string): void {
    this.closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
