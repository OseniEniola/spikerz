import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService implements OnDestroy {
  private readonly MOBILE_BREAKPOINT = 768;
  private resizeSubscription: Subscription;
  private mobileSubject = new BehaviorSubject<boolean>(this.isMobile());

  isMobile$ = this.mobileSubject.asObservable();

  constructor() {
    this.resizeSubscription = fromEvent(window, 'resize').subscribe(() => {
      this.mobileSubject.next(this.isMobile());
    });
  }

  private isMobile(): boolean {
    return window.innerWidth < this.MOBILE_BREAKPOINT;
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe();
  }
}
