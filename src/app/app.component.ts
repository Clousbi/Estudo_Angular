import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',//nome do componente
  templateUrl: './app.component.html',//template importado
  styleUrls: ['./app.component.css']//estilo importado
})
export class AppComponent {//js do template
  //variaveis
  title = 'Portal de Estudos';
  nomePortal: string;//tipagem por typescript
  cursos: string[]; // variavel array


  constructor(private/*deixa o atributo privado ou publico para o componente*/ appService: AppService){//injeção de dependência
    this.nomePortal = 'Portal de Estudos'

    /*for(let i=0; i< this.cursos.length; i++){
      let curso = this.cursos[i];
    }*/ //diretiva for no HTML

    //var servico = new AppService();

    this.cursos = this.appService.getCursos();
    
  }
}
