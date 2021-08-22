import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchingComponentComponent } from './switching-component.component';

describe('SwitchingComponentComponent', () => {
  let component: SwitchingComponentComponent;
  let fixture: ComponentFixture<SwitchingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
