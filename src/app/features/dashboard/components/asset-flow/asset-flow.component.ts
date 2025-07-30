import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { ChartConfiguration } from 'chart.js';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import { WorkflowComponent } from "../workflow/workflow.component";

@Component({
  selector: 'app-asset-flow',
  standalone: true,
  imports: [SharedModule, BaseChartDirective, WorkflowComponent],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './asset-flow.component.html',
  styleUrl: './asset-flow.component.scss',
})
export class AssetFlowComponent {
  assestList = [
    {
      serverName: 'Load Balancer',
      ip: '192.168.1.41',
      status: 'medium',
    },
    {
      serverName: 'Storage Node',
      ip: '192.168.1.42',
      status: 'high',
    },
    {
      serverName: 'DNS Resolver',
      ip: '192.168.1.43',
      status: 'low',
    },
    {
      serverName: 'Monitoring Agent',
      ip: '192.168.1.44',
      status: 'critical',
    },
    {
      serverName: 'Web Server 1',
      ip: '192.168.1.10',
      status: 'critical',
    },
    {
      serverName: 'Database Server',
      ip: '192.168.1.20',
      status: 'high',
    },
    {
      serverName: 'Cache Node',
      ip: '192.168.1.30',
      status: 'medium',
    },
    {
      serverName: 'API Gateway',
      ip: '192.168.1.40',
      status: 'low',
    },
    {
      serverName: 'Auth Server',
      ip: '192.168.1.50',
      status: 'high',
    },
    {
      serverName: 'Backup Server',
      ip: '192.168.1.60',
      status: 'critical',
    },
  ];

  public doughnutChartLabels: string[] = ['30 Critical', '45 High', '10 Medium', ' 30 Low'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [
      {
        data: [30, 45, 10, 30],
        backgroundColor: ['#E5372B', '#C6190D', '#FF9500', '#02983E'],
      },
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
        labels: {
          usePointStyle: true,
        pointStyle: 'circle',
        boxWidth: 8,    
        boxHeight: 8,   
        padding: 12     
        },
      },
    },
  };

  assetsInView = this.assestList.slice(1, 2);

  pageSize = 3;
  currentPage = 0;


  get totalPages(): number {
    return Math.ceil(this.assestList.length / this.pageSize);
  }

  get startItem(): number {
    return this.currentPage * this.pageSize;
  }

  get endItem(): number {
    const end = this.startItem + this.pageSize;
    return end > this.assestList.length ? this.assestList.length : end;
  }

  get paginatedItems() {
    const start = this.currentPage * this.pageSize;
    return this.assestList.slice(start, start + this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}
