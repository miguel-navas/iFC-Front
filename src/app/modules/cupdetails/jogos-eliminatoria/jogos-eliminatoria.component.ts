import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JogosValueObject } from 'src/app/models/jogos.models';
import { CupdetailsService } from 'src/app/service/cupdetails.service';


@Component({
  selector: 'app-jogos-eliminatoria',
  templateUrl: './jogos-eliminatoria.component.html',
  styleUrls: ['./jogos-eliminatoria.component.scss']
})
export class JogosEliminatoriaComponent implements OnInit {

  jogos: Observable<JogosValueObject[]>[] = [];
  todosJogos?: Observable<JogosValueObject[]>;  

  constructor(
    private _jogosService: CupdetailsService
  ) {
    //this.jogos = [];
   }

  ngOnInit(): void {
    this.carregaTodosJogos();
  }

  carregaTodosJogos() { 
    this.todosJogos = this._jogosService.obterJogos();  
  } 

  _obterJogos(): void {
    this._jogosService.obterJogos()
      .subscribe(
        (response) => {
          if (response != null) {
            //this.jogos = response;
          }
        }
      );
  }

}
