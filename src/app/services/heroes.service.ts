import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesUrl: string = "https://heroesapp-1fc0e.firebaseio.com/heroes.json"
  heroeUrl: string = "https://heroesapp-1fc0e.firebaseio.com/heroes/"

  constructor(private http: HttpClient) { }

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    return this.http.post<any>(this.heroesUrl, body, { headers })
      .pipe(
        map(res => {
          console.log(res)
          return res
        })
      )

  }

  actualizarHeroe(heroe: Heroe, key$: string) {
    let body = JSON.stringify(heroe)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    let url = `${this.heroeUrl}/${key$}.json`

    return this.http.put(url, body, { headers })
      .pipe(
        map(res => {
          console.log(res)
          return res
        })
      )

  }

  getHeroe(key$: string) {
    let url = `${this.heroeUrl}/${key$}.json`

    return this.http.get<any>(url)
      .pipe(
        map(res => {
          console.log(res)
          return res
        })
      )
  }

  getHeroes() {
    return this.http.get<any>(this.heroesUrl)
      .pipe(
        map(res => {
          console.log(res)
          return res
        })
      )
  }
}
