import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { ExemplosRoutingModule } from './exemplos-routing.module';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { PipesComponent } from './pipes/pipes.component';
import { CriacaoPipesComponent } from './criacao-pipes/criacao-pipes.component';
import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
import { AppSorteioComponent } from './app-sorteio/app-sorteio.component';
import { AppGithubComponent } from './app-github/app-github.component';



@NgModule({
  declarations: [
    DataBindingComponent,
    DiretivasComponent,
    PipesComponent,
    CriacaoPipesComponent,
    AppSorteioComponent,
    AppGithubComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExemplosRoutingModule,
    CompartilhadoModule
  ],
  exports: [
    DataBindingComponent
  ]
})
export class ExemplosModule { }
