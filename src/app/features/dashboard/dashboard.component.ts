import { Component } from '@angular/core';
import { CentralInfoPanelComponent } from "./components/central-info-panel/central-info-panel.component";
import { AssetFlowComponent } from "./components/asset-flow/asset-flow.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CentralInfoPanelComponent, AssetFlowComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
