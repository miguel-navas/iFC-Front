import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { JogosValueObject } from '../models/jogos.models';

@Injectable({
  providedIn: 'root'
})
export class CupdetailsService {

  url = 'api/Jogos';

  constructor(
      private http: HttpClient
    ) {
      //super('jogos')
     } 

  obterJogos(): Observable<JogosValueObject[]> {  
    return this.http.get<JogosValueObject[]>(this.url);  
  }
}
