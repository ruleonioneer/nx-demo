import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { default as memo } from 'memo-decorator';

@Component({
  selector: 'nx-demo-functions-pipes',
  templateUrl: './functions-pipes.component.html',
  styleUrls: ['./functions-pipes.component.css']
})
export class FunctionsPipesComponent implements OnInit {
  memoPipeText = 'memo pipe';
  memoFunctionText = 'memo function';
  regularPipeText = 'regular pipe';
  regularFunctionText = 'regular function';

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
  }

  change() {

    this.ref.detectChanges();
  }

  @memo()
  getMemoText() {
    console.log('memo function called');
    return this.memoFunctionText;
  }

  getRegularText() {
    console.log('regular function called');
    return this.regularFunctionText;
  }

}
