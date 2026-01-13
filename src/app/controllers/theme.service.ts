import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode$ = new BehaviorSubject<boolean>(false);

  constructor() {
    // Check if window and matchMedia are available (for SSR compatibility)
    if (typeof window !== 'undefined' && window.matchMedia) {
      // Initialize with system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.isDarkMode$.next(prefersDark.matches);

      // Listen for changes in system preference
      prefersDark.addEventListener('change', (e) => {
        this.isDarkMode$.next(e.matches);
      });
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
