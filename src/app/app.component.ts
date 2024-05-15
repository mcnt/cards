import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FiltrosPesquisaComponent } from "./filtros-pesquisa/filtros-pesquisa.component";
import { ResultadosPesquisaComponent } from "./resultados-pesquisa/resultados-pesquisa.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ColecaoCartasComponent } from './colecao-cartas/colecao-cartas.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FiltrosPesquisaComponent, ResultadosPesquisaComponent,ColecaoCartasComponent, HttpClientModule, CommonModule]
})
export class AppComponent {
  title = 'linked';
  filtros: any = {};
  setId: any = ''

  updateFilters(filters: any) {
    this.filtros = filters;

  }
  getColetion(set: any) {
    this.setId = set
  }

}
