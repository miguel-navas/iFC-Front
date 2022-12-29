import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosGruposComponent } from './jogos-grupos.component';

describe('JogosGruposComponent', () => {
  let component: JogosGruposComponent;
  let fixture: ComponentFixture<JogosGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogosGruposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
