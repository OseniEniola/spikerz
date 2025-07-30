import { Component } from '@angular/core';
import { RemediationTechniqueComponent } from "../remediation-technique/remediation-technique.component";

@Component({
  selector: 'app-central-info-panel',
  standalone: true,
  imports: [RemediationTechniqueComponent],
  templateUrl: './central-info-panel.component.html',
  styleUrl: './central-info-panel.component.scss'
})
export class CentralInfoPanelComponent {

  remediationItems = [
  {
    name: 'Asset One',
    serverName: 'Server-Alpha',
    desc: 'Primary production server handling web traffic.',
    content: `Server-Alpha is the main entry point for all user-facing applications. It manages HTTP/HTTPS traffic, handles load balancing through Nginx, and connects to backend microservices. 
    Logs are collected via Fluentd and stored in Elasticsearch for monitoring. It is crucial this server remains available 24/7.`
  },
  {
    name: 'Asset Two',
    serverName: 'Server-Beta',
    desc: 'Handles background processing tasks and data sync.',
    content: `Server-Beta is optimized for background jobs like report generation, third-party API syncing, and scheduled data exports. 
    It runs multiple worker queues using BullMQ and supports automatic retries on failure. Monitoring is done via Prometheus with custom Grafana dashboards. 
    This server is not user-facing, but it's vital for business operations and backend workflows.`
  },
  {
    name: 'Asset Three',
    serverName: 'Server-Gamma',
    desc: 'Used for staging and QA purposes.',
    content: `Server-Gamma serves as the pre-production environment. QA teams use it to validate new features and bug fixes before they are deployed to production. 
    It mirrors the production setup closely, with separate databases, feature flags, and CI/CD pipelines. 
    Developers and testers access this server regularly during sprint cycles.`
  }
];


}
