import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNonTrovataComponent } from './pagina-non-trovata.component';

describe('PaginaNonTrovataComponent', () => {
  let component: PaginaNonTrovataComponent;
  let fixture: ComponentFixture<PaginaNonTrovataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaNonTrovataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNonTrovataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
