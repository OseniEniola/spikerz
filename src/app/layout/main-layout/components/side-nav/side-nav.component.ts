import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from "../../../../shared/shared.module";
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('150ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class SideNavComponent {

  @Input() openMobileMenu:boolean = false
  @Output() updateMobileToggle: EventEmitter<boolean> = new EventEmitter<boolean>(false) 

  menuItems = Array(7).fill('Lorem');
  activeMenu = 0

  isCollapsed = false;

toggleMenu(): void {
  this.isCollapsed = !this.isCollapsed;
  this.openMobileMenu = !this.openMobileMenu
}
}
