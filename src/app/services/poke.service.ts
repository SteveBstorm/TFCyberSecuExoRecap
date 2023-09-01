import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private url : string = "https://pokeapi.co/api/v2/pokemon"
  constructor(
    private client : HttpClient
  ) { }

  getList(url: string) : Observable<any> {
    return this.client.get<any>(url)
  }
}
