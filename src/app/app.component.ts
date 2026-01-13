import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ThemeService } from './controllers/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit, OnDestroy {
  private themeSubscription?: Subscription;

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // Subscribe to theme changes and apply the appropriate class to the html element
    this.themeSubscription = this.themeService.isDarkMode().subscribe(isDark => {
      const htmlElement = document.documentElement;
      if (isDark) {
        this.renderer.addClass(htmlElement, 'dark-theme');
      } else {
        this.renderer.removeClass(htmlElement, 'dark-theme');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
