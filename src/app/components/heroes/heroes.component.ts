import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {


  heroes: Heroe[] = []
  loading: boolean = true

  constructor(private _heroesService: HeroesService) {
    this._heroesService.getHeroes()
      .subscribe(data => {
        this.heroes = data
        this.loading = false
      })
  }

  ngOnInit() {
  }

  eliminar(key$: string) {
    this._heroesService.eliminar(key$)
      .subscribe(res => {
        if (res) {
          console.log(res)
        } else {
          delete this.heroes[key$]
        }
      })
  }

}
