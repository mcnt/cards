import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { map, catchError } from 'rxjs/operators';
import { CardSet } from '../shared/card-set'
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { CardService } from '../cards.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-resultados-pesquisa',
  standalone: true,
  imports: [MatCardModule, NgFor, NgIf, MatProgressSpinnerModule, CommonModule],
  templateUrl: './resultados-pesquisa.component.html',
  styleUrl: './resultados-pesquisa.component.css'
})
export class ResultadosPesquisaComponent implements OnChanges  {
  @Input() filtros: any;
  results:  CardSet[] = [];
  @Output() coletion = new EventEmitter<string>();
  setId: string = '';
;
  loading: boolean = false;
  cardsSelecionados: any[] = []; 
  constructor(private cardService: CardService, private snackBar: MatSnackBar) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filtros'] && !changes['filtros'].firstChange) {
      this.realizarPesquisa();
    }
  }

  async realizarPesquisa() {
    this.loading = true;
    const queryParams = this.buildQueryParams();
    this.cardService.getSets(queryParams).subscribe(
      ( data: { sets: CardSet[]; }) => {
        this.results = data.sets;
        this.loading = false;
      },
      ( error: any) => {
        console.error('Erro ao buscar resultados:', error)
        this.loading = false;
        this.snackBar.open('Ocorreu um erro ao buscar os resultados. Por favor, tente novamente.', 'Fechar', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 5000
      
        });
      }
    );
  }

  private buildQueryParams(): string {
    let queryParams = '';
    if (this.filtros.nome) {
      queryParams += `name=${encodeURIComponent(this.filtros.nome)}`;
    }
    if (this.filtros.options) {
      queryParams += `&block=${encodeURIComponent(this.filtros.options)}`;
    }
    return queryParams;
  }

  selectColetions(set: string) {
    this.setId = set
    this.coletion.emit(this.setId)
  }
}
