import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'app-productos-venta',
  templateUrl: './productos-venta.component.html',
  styleUrls: ['./productos-venta.component.css'],
  providers: [ ProductosService, OrdenesService ]
})
export class ProductosVentaComponent implements OnInit {

  constructor(private _productosService: ProductosService, private _ordenesService: OrdenesService ) { }

  ngOnInit(): void {
    console.log(this._productosService.test());
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
