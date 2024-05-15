import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosPesquisaComponent } from './filtros-pesquisa.component';

describe('FiltrosPesquisaComponent', () => {
  let component: FiltrosPesquisaComponent;
  let fixture: ComponentFixture<FiltrosPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrosPesquisaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltrosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
