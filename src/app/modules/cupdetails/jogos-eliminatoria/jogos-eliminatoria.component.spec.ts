import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosEliminatoriaComponent } from './jogos-eliminatoria.component';

describe('JogosEliminatoriaComponent', () => {
  let component: JogosEliminatoriaComponent;
  let fixture: ComponentFixture<JogosEliminatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogosEliminatoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosEliminatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
