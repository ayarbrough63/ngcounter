import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColossalComponent } from './colossal.component';

describe('ColossalComponent', () => {
  let component: ColossalComponent;
  let fixture: ComponentFixture<ColossalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColossalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColossalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
