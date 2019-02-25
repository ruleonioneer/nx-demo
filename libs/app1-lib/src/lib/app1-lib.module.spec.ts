import { async, TestBed } from '@angular/core/testing';
import { App1LibModule } from './app1-lib.module';

describe('App1LibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [App1LibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(App1LibModule).toBeDefined();
  });
});
