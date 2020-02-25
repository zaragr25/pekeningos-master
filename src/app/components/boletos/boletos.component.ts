import { Component, OnInit } from '@angular/core';
import { BoletosService } from '../../services/boletos.service';


@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.css'],
  providers: [ BoletosService ]
})
export class BoletosComponent implements OnInit {

  constructor(private _boletosService: BoletosService) { }

  ngOnInit(): void {
    console.log(this._boletosService.test());
  }

}
