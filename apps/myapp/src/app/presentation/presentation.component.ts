import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nx-demo-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresentationComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
