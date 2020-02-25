import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ ClientesService ]
})
export class ClientesComponent implements OnInit {

  constructor(private _clientesService: ClientesService) { }

  ngOnInit(): void {
    console.log(this._clientesService.test());
  }

}
