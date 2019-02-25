import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-demo-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  data = 'data from container';

  constructor() { }

  ngOnInit() {
  }

}
