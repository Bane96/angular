import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajZgraduComponent } from './dodaj-zgradu.component';

describe('DodajZgraduComponent', () => {
  let component: DodajZgraduComponent;
  let fixture: ComponentFixture<DodajZgraduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajZgraduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajZgraduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
