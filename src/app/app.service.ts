import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  getCursos(){ //get(pega) variavel cursos e coloca valor nele como função js
    return ['Java', 'Angular'];
  }
}
