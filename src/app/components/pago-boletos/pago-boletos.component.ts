import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'app-pago-boletos',
  templateUrl: './pago-boletos.component.html',
  styleUrls: ['./pago-boletos.component.css']
})
export class PagoBoletosComponent implements OnInit {

  constructor(private _ordenesService: OrdenesService) { }

  ngOnInit(): void {
  }

}
