import { async, TestBed } from '@angular/core/testing';
import { App2LibModule } from './app2-lib.module';

describe('App2LibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [App2LibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(App2LibModule).toBeDefined();
  });
});
