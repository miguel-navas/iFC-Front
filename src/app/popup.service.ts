import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  constructor() { }

  makeCapitalPopup(data: any): string {
    var link = '';
    for(var i = 0; i < data.ano.length; i++) {
      link += `<div align='center' class='pop'><a href="/cupdetails/${ data.ano[i] }">${ data.ano[i]}</a></div>`;
    }
    return `` +
      `<div align='center' class='pop'>${ data.countrie }</div>`+link
      
  }
}