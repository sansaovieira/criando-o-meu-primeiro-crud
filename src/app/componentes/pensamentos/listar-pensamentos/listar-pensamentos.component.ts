import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent {
  listaPensamentos: Pensamento [] = [];

  constructor(private service: PensamentoService){}

  ngOnInit(): void{
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
}
