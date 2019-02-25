import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionsPipesComponent } from './functions-pipes.component';

describe('FunctionsPipesComponent', () => {
  let component: FunctionsPipesComponent;
  let fixture: ComponentFixture<FunctionsPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionsPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionsPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
