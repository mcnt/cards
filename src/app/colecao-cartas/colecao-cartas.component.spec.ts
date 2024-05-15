import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoCartasComponent } from './colecao-cartas.component';

describe('ColecaoCartasComponent', () => {
  let component: ColecaoCartasComponent;
  let fixture: ComponentFixture<ColecaoCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColecaoCartasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColecaoCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
