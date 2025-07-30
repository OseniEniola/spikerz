import { Component } from '@angular/core';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SideNavComponent, RouterOutlet,SharedModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  openMobileMenu: boolean = false;

  toggleMenu(): void {
    this.openMobileMenu = !this.openMobileMenu;
  }

  updateToggle(data:any){
    this.openMobileMenu = data

    console.log(data,this.openMobileMenu)
  }
}
