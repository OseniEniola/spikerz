import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-remediation-technique',
  standalone: true,
  imports: [AccordionModule,CommonModule],
  templateUrl: './remediation-technique.component.html',
  styleUrl: './remediation-technique.component.scss'
})
export class RemediationTechniqueComponent {
 @Input() accordionItems: any[] = []
}
