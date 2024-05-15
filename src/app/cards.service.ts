import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
  // Define providers as an array
})

export class CardService {
  constructor(private http: HttpClient) {}

  getSets(queryParams: string) {
    return  this.http.get<any>(`https://api.magicthegathering.io/v1/sets?${queryParams}`)
  }

  getColetionsCards(setId: string) {
    return this.http.get<any[]>(`https://api.magicthegathering.io/v1/sets/${setId}/booster`);
  }
//   getCollectionCards(setId: string) {
//     return this.http.get<any[]>(`https://api.magicthegathering.io/v1/sets/${setId}/cards`);
//   }

//   getBoosterCards(setId: string) {
//     return this.http.get<any[]>(`https://api.magicthegathering.io/v1/sets/${setId}/booster`);
//   }

  // Outros métodos de acordo com as necessidades da sua aplicação
}
