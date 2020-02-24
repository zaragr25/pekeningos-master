import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-venta',
  templateUrl: './productos-venta.component.html',
  styleUrls: ['./productos-venta.component.css']
})
export class ProductosVentaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
