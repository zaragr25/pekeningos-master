import { Component, OnInit } from '@angular/core';
import { BoletosService } from '../../services/boletos.service';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'app-boletos-venta',
  templateUrl: './boletos-venta.component.html',
  styleUrls: ['./boletos-venta.component.css'],
  providers: [ BoletosService, OrdenesService ]
})
export class BoletosVentaComponent implements OnInit {

  constructor(private _boletosService: BoletosService, private _ordenesService: OrdenesService) { }

  ngOnInit(): void {
    console.log(this._boletosService.test());
    console.log(this._ordenesService.test());
  }

  cantidad:number=1;
  i=1;
  plus(){
    if(this.i != 20){
      this.i++;
      this.cantidad = this.i;

    }
  }
  minus(){
    if(this.i != 1){
      this.i--;
      this.cantidad = this.i;
    
    }
  }

}
