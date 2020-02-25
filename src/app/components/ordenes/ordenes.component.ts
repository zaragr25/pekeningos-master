import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css'],
  providers: [ OrdenesService ]
})
export class OrdenesComponent implements OnInit {

  constructor(private _ordenesService: OrdenesService ) { }

  ngOnInit(): void {
    console.log(this._ordenesService.test());
  }

}
