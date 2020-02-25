import { Component, OnInit } from '@angular/core';
import { FosUserService } from '../../services/fos-user.service';

@Component({
  selector: 'app-fos-user',
  templateUrl: './fos-user.component.html',
  styleUrls: ['./fos-user.component.css'],
  providers: [ FosUserService ]
})
export class FosUserComponent implements OnInit {

  constructor(private _fosUserService: FosUserService) { }

  ngOnInit(): void {
    console.log(this._fosUserService.test());
  }

}
