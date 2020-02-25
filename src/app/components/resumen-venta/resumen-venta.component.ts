import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'app-resumen-venta',
  templateUrl: './resumen-venta.component.html',
  styleUrls: ['./resumen-venta.component.css'],
  providers: [ OrdenesService ]
})
export class ResumenVentaComponent implements OnInit {

  constructor(private _ordenesService: OrdenesService) { }

  ngOnInit(): void {
    console.log(this._ordenesService.test());
  }

}
