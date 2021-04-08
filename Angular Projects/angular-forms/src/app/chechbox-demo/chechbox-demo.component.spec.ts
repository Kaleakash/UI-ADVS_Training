import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechboxDemoComponent } from './chechbox-demo.component';

describe('ChechboxDemoComponent', () => {
  let component: ChechboxDemoComponent;
  let fixture: ComponentFixture<ChechboxDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChechboxDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechboxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
