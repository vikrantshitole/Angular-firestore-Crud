import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputDataComponent } from './demo-input-data.component';

describe('DemoInputDataComponent', () => {
  let component: DemoInputDataComponent;
  let fixture: ComponentFixture<DemoInputDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoInputDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInputDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
