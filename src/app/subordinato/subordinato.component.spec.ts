import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubordinatoComponent } from './subordinato.component';

describe('SubordinatoComponent', () => {
  let component: SubordinatoComponent;
  let fixture: ComponentFixture<SubordinatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubordinatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubordinatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
