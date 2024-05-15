import { Component, Input } from '@angular/core';
import { CardService } from '../cards.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { NgIf,NgFor } from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-colecao-cartas',
  standalone: true,
  imports: [MatProgressSpinnerModule,MatCardModule, NgIf, NgFor],
  templateUrl: './colecao-cartas.component.html',
  styleUrl: './colecao-cartas.component.css'
})
export class ColecaoCartasComponent {
  @Input() setId: any;
  loading: boolean = false;
  cardsSelecionados: any = [];

  constructor(private cardService: CardService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getColetionCard()
  }
  getColetionCard( ) {
    this.loading = true;
    this.cardService.getColetionsCards(this.setId).subscribe((data: any) => {
      const cards = data.cards.filter((card: any) => card.types.includes('Creature'));
      while (this.cardsSelecionados.length < 30 && cards.length > 0) {
        this.cardsSelecionados.push(cards.shift());
      }
  
      if(this.cardsSelecionados.length < 30) {
        this.getColetionCard()
      }
      else {
        this.loading = false;
        console.log('30 cartas "creature" encontradas:', this.cardsSelecionados);
      }
    });
    ( error: any) => {
      this.loading = false;
      this.snackBar.open(error, 'Fechar', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 5000
    
      });
    }
  }
}
