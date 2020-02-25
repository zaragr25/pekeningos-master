import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css'],
  providers: [ ClientesService ]
})
export class RegistroClienteComponent implements OnInit {

  constructor(private _clientesService: ClientesService) { }

  ngOnInit(): void {
    console.log(this._clientesService.test());
  }

}
