import { Component } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
  constructor(private pokeService : PokeService) {}

  pokelist!: any
  ngOnInit() {
    this.load("https://pokeapi.co/api/v2/pokemon")
  }

  next() {
    this.load(this.pokelist.next)
  }
  previous() {
    this.load(this.pokelist.previous)
  }
  load(url : string) {
    this.pokeService.getList(url).subscribe({
      next : (data : any) => {
        this.pokelist = data
        console.log(this.pokelist)
      },
      error : (error) => {console.log(error.message)},
      complete : () => {}
    })
  }
}
