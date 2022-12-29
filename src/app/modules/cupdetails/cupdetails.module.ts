import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs'; 
import { CupdetailsComponent } from './cupdetails.component';
import { EliminatoriasComponent } from './eliminatorias/eliminatorias.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { JogosEliminatoriaComponent } from './jogos-eliminatoria/jogos-eliminatoria.component';
import { ClassificacaoEliminatoriaComponent } from './classificacao-eliminatoria/classificacao-eliminatoria.component';
import { GruposComponent } from './grupos/grupos.component';
import { JogosGruposComponent } from './jogos-grupos/jogos-grupos.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
  declarations: [
    CupdetailsComponent,
    EliminatoriasComponent,
    JogosEliminatoriaComponent,
    ClassificacaoEliminatoriaComponent,
    GruposComponent,
    JogosGruposComponent,
    JogosEliminatoriaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule
  ],
  exports:[
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ] 
})
export class CupdetailsModule { }

