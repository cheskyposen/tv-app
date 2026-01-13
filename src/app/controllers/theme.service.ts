import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {
  private isDarkMode$ = new BehaviorSubject<boolean>(false);
  private mediaQuery?: MediaQueryList;
  private mediaQueryListener?: (e: MediaQueryListEvent) => void;

  constructor() {
    // Check if window and matchMedia are available (for SSR compatibility)
    if (typeof window !== 'undefined' && window.matchMedia) {
      // Initialize with system preference
      this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      this.isDarkMode$.next(this.mediaQuery.matches);

      // Listen for changes in system preference
      this.mediaQueryListener = (e: MediaQueryListEvent) => {
        this.isDarkMode$.next(e.matches);
      };
      this.mediaQuery.addEventListener('change', this.mediaQueryListener);
    }
  }

  ngOnDestroy(): void {
    // Clean up event listener
    if (this.mediaQuery && this.mediaQueryListener) {
      this.mediaQuery.removeEventListener('change', this.mediaQueryListener);
    }
  }

  /**
   * Get the current dark mode state as an observable
   */
  isDarkMode(): Observable<boolean> {
    return this.isDarkMode$.asObservable();
  }

  /**
   * Get the current dark mode state value
   */
  isDarkModeValue(): boolean {
    return this.isDarkMode$.value;
  }
}
