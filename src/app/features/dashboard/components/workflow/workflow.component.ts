import { Component } from '@angular/core';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { SharedModule } from '../../../../shared/shared.module';
import { ScreenService } from '../../../../core/services/utils';

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [NgxGraphModule, SharedModule],
  templateUrl: './workflow.component.html',
  styleUrl: './workflow.component.scss',
})
export class WorkflowComponent {

  private isMobileSubscription;
  public isMobile: boolean = false;

  constructor(isMobileScreen: ScreenService){
    this.isMobileSubscription = isMobileScreen.isMobile$.subscribe((value) => {
      this.isMobile = value;
      console.log('Mobile view:', value);
    });
  }

   links = [
  {
    id: 'l1',
    source: 'web-01',
    target: 'api-01',
    label: 'routes to',
  },
  {
    id: 'l2',
    source: 'web-02',
    target: 'api-01',
    label: 'routes to',
  },
  {
    id: 'l3',
    source: 'api-01',
    target: 'auth-01',
    label: 'authenticates via',
  },
  {
    id: 'l4',
    source: 'api-01',
    target: 'db-01',
    label: 'reads from',
  },
  {
    id: 'l5',
    source: 'api-01',
    target: 'cache-01',
    label: 'uses cache',
  },
  {
    id: 'l6',
    source: 'worker-01',
    target: 'db-01',
    label: 'writes to',
  },
  {
    id: 'l7',
    source: 'mq-01',
    target: 'worker-01',
    label: 'queues jobs to',
  },
  {
    id: 'l8',
    source: 'api-01',
    target: 'mq-01',
    label: 'publishes to',
  },
  {
    id: 'l9',
    source: 'cdn-01',
    target: 'web-01',
    label: 'serves',
  },
  {
    id: 'l10',
    source: 'cdn-01',
    target: 'web-02',
    label: 'serves',
  },
  {
    id: 'l11',
    source: 'log-01',
    target: 'api-01',
    label: 'logs from',
  },
  {
    id: 'l12',
    source: 'log-01',
    target: 'worker-01',
    label: 'logs from',
  },
];


  nodes = [
  {
    id: 'web-01',
    label: 'Web Server 01',
    ip: '192.168.1.10',
    isFirst: true,
    content: [
      { type: 'label', text: 'Environment: “Production”', color: 'red' },
      { type: 'highlight', text: '1234,5678', color: 'blue' },
    ],
  },
  {
    id: 'db-01',
    label: 'Database Primary',
    ip: '192.168.1.20',
    isCritical: true,
    content: [
      { type: 'label', text: 'DB Role: “Primary”', color: 'red' },
      { type: 'highlight', text: '1234,5678', color: 'blue' },
    ],
  },
  {
    id: 'cache-01',
    label: 'Redis Cache',
    ip: '10.0.0.3',
    isCritical: true,
    content: [
      { type: 'label', text: 'Role: Cache', color: 'gray' },
      { type: 'highlight', text: '1.2.3.4', color: 'purple' },
    ],
  },
  {
    id: 'api-01',
    label: 'API Gateway',
    ip: '10.0.0.4',
    content: [
      { type: 'label', text: 'Gateway: Enabled', color: 'gray' },
      { type: 'highlight', text: '1.2.3.4', color: 'purple' },
    ],
  },
  {
    id: 'auth-01',
    label: 'Auth Service',
    ip: '10.0.1.1',
    content: [
      { type: 'label', text: 'Login: “Enabled”', color: 'red' },
      { type: 'highlight', text: 'Token', color: 'green' },
      { type: 'highlight', text: '5678', color: 'blue' },
    ],
  },
  {
    id: 'mq-01',
    label: 'Message Queue',
    ip: '10.0.2.2',
    content: [
      { type: 'label', text: 'Queue: “Active”', color: 'red' },
      { type: 'highlight', text: '1.2.3.4', color: 'purple' },
    ],
  },
  {
    id: 'web-02',
    label: 'Web Server 02',
    ip: '192.168.1.11',
    content: [
      { type: 'highlight', text: '1.2.3.4', color: 'purple' },
      { type: 'highlight', text: '1234,5678', color: 'blue' },
    ],
  },
  {
    id: 'worker-01',
    label: 'Background Worker',
    ip: '10.0.3.5',
    content: [
      { type: 'label', text: 'Role: Job Runner', color: 'gray' },
      { type: 'highlight', text: '1.2.3.4', color: 'purple' },
    ],
  },
  {
    id: 'cdn-01',
    label: 'CDN Node',
    ip: '172.16.0.1',
    content: [
      { type: 'label', text: 'Region: “US-West”', color: 'red' },
      { type: 'highlight', text: 'Cache', color: 'green' },
    ],
  },
  {
    id: 'log-01',
    label: 'Log Aggregator',
    ip: '172.16.0.2',
    content: [
      { type: 'highlight', text: '1.2.3.4', color: 'purple' },
      { type: 'highlight', text: '1.2.3.4', color: 'purple' },
    ],
  },
];

namedColorsToRGBA: { [key: string]: string } = {
  red: 'rgba(255, 255, 0, 0.2)',
  blue: 'rgba(0, 0, 255, 0.2)',
  gray: 'rgba(128, 128, 128, 0.2)',
  purple: 'rgba(128, 0, 128, 0.2)',
  green: 'rgba(0, 128, 0, 0.2)',
};

hoveredNode: any = null;
  mouseX = 0;
  mouseY = 0;

  onNodeMouseEnter(event: MouseEvent, node: any) {
    this.hoveredNode = node;
    this.updateMousePosition(event);
  }

  onNodeMouseLeave() {
    this.hoveredNode = null;
  }

  onMouseMove(event: MouseEvent) {
    this.updateMousePosition(event);
  }

  private updateMousePosition(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

}
