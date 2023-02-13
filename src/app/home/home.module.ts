import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeDetalhesComponent } from './home-detalhes/home-detalhes.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeDetalhesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
