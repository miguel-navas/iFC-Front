import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JogosValueObject } from 'src/app/models/jogos.models';
import { CupdetailsService } from 'src/app/service/cupdetails.service';

@Component({
  selector: 'app-eliminatorias',
  templateUrl: './eliminatorias.component.html',
  styleUrls: ['./eliminatorias.component.scss']
})
export class EliminatoriasComponent implements OnInit {
  
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
