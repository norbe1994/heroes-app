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

  constructor(private _heroesService: HeroesService) {
    this._heroesService.getHeroes()
      .subscribe(data => {
        this.heroes = data
      })
  }

  ngOnInit() {
  }

}
