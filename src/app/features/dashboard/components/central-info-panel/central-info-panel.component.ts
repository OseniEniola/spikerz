import { Component } from '@angular/core';
import { RemediationTechniqueComponent } from '../remediation-technique/remediation-technique.component';

@Component({
  selector: 'app-central-info-panel',
  standalone: true,
  imports: [RemediationTechniqueComponent],
  templateUrl: './central-info-panel.component.html',
  styleUrl: './central-info-panel.component.scss',
})
export class CentralInfoPanelComponent {
  descriptionText = `  Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque gravida
    nibh et magna faucibus. Dui commodo ut metus amet egestas habitant viverra.
    Quisque fusce senectus facilisis non diam leo nulla sem pellentesque.
    Sit in vel sed cursus metus sit fringilla vestibulum.`;

  extrasText = ` Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas
    tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor
    pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar
    accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in
    nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant
    congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.`;

  remediationItems = [
    {
      name: 'Lorem T',
      serverName: 'Server',
      desc: 'Lorem ipsum dolor sit amet consectetur.',
      content: `Lorem ipsum dolor sit amet consectetur. In laoreet elementum luctus odio. Id enim urna.`,
    },
    {
      name: 'Lorem S',
      serverName: 'Server',
      desc: 'Lorem ipsum dolor sit amet consectetur.',
      content: `Lorem ipsum dolor sit amet consectetur. Quis viverra etiam pellentesque lectus semper in massa purus. Auctor aenean aenean senectus massa dignissim vehicula mi erat purus. Praesent scelerisque aliquet metus sagittis dictum sed sed. Sed venenatis sed urna quam.`,
    },
    {
      name: 'Lorem P',
      serverName: 'Server',
      desc: 'Lorem ipsum dolor sit amet consectetur.',
      content: `Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna.`,
    },
  ];
}
