import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ ProductosService ]
})
export class ProductosComponent implements OnInit {

  constructor(private _productosService: ProductosService) { }

  ngOnInit(): void {
    console.log(this._productosService.test());
  }

}
