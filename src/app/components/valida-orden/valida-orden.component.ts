import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';


@Component({
  selector: 'app-valida-orden',
  templateUrl: './valida-orden.component.html',
  styleUrls: ['./valida-orden.component.css']
})
export class ValidaOrdenComponent implements OnInit {

  constructor(private _ordenesService: OrdenesService) { }

  ngOnInit(): void {
  }

}
