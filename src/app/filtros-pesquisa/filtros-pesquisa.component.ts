
import { Component,EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-filtros-pesquisa',
  standalone: true,
  imports: [FormsModule, MatSelectModule,MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './filtros-pesquisa.component.html',
  styleUrl: './filtros-pesquisa.component.css'
})
export class FiltrosPesquisaComponent {
  nameFilter: string = '';
  optionFilter: string = '';
  
  optionSelect: string[] = ['Amonkhet', 'Ixalan', 'Zendikar', 'Ravnica', 'Onslaught'];
  @Output() filtersUpdated = new EventEmitter<any>();

  searchCards() {
    const filters = {
      nome: this.nameFilter,
      options: this.optionFilter
    };
    this.filtersUpdated.emit(filters);

  }
}
