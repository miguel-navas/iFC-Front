import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificacaoEliminatoriaComponent } from './classificacao-eliminatoria.component';

describe('ClassificacaoEliminatoriaComponent', () => {
  let component: ClassificacaoEliminatoriaComponent;
  let fixture: ComponentFixture<ClassificacaoEliminatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassificacaoEliminatoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificacaoEliminatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
