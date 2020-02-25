import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-valida-cliente',
  templateUrl: './valida-cliente.component.html',
  styleUrls: ['./valida-cliente.component.css'],
  providers: [ ClientesService ]
})
export class ValidaClienteComponent implements OnInit {

  constructor(private _clientesService: ClientesService) { }

  ngOnInit(): void {
    console.log(this._clientesService.test());
  }

}
