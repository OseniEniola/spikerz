import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-lazy-media',
  templateUrl: './lazy-media.component.html',
  styleUrls: ['./lazy-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyMediaComponent implements AfterViewInit, OnDestroy {
  @Input() src!: string;
  @Input() alt = '';
  @Input() isBackground = false;
  @Input() className = '';
  @Input() placeholder = '';
  @Input() lazyLoad = true;
  @Input() hasOverlay = false;
  @Input() overlayColor = 'rgba(0, 0, 0, 0.5)';

  isVisible = false;
  observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (!this.lazyLoad) {
      this.isVisible = true;
      this.cdr.markForCheck();
      return;
    }
  
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback for environments where it's not available
      this.isVisible = true;
      this.cdr.markForCheck();
      return;
    }
  
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.isVisible = true;
        this.cdr.markForCheck();
        this.observer.disconnect();
      }
    }, { rootMargin: '50px' });
  
    this.observer.observe(this.el.nativeElement);
  }
  

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
