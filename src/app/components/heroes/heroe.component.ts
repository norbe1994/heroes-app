import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel',
  }

  nuevo: boolean = false
  id: string

  constructor(private router: Router, private _heroesService: HeroesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params
      .subscribe(params => {
        this.id = params['id']
        this.nuevo = params['id'] == 'nuevo'
        if (!this.nuevo) {
          this._heroesService.getHeroe(this.id)
            .subscribe(data => {
              this.heroe = data
            })
        }
      })
  }

  ngOnInit() {
  }

  agregarNuevo(form: NgForm) {
    this.router.navigate(['/heroe', 'nuevo'])

    form.reset({
      casa: 'Marvel'
    })
  }

  guardar() {
    if (this.nuevo) {
      this._heroesService.nuevoHeroe(this.heroe)
        .subscribe(data => {
          this.router.navigate(['/heroe', data.name])
        },
          error => console.log(error))
    } else {
      this._heroesService.actualizarHeroe(this.heroe, this.id)
        .subscribe(data => {
          console.log(data);
        },
          error => console.log(error))
    }
  }

}
