import { Component, OnInit, OnDestroy } from '@angular/core';
import { FosUserService } from '../../services/fos-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ FosUserService ]
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private _FosUserService: FosUserService) {}

  ngOnInit() {
    console.log(this._FosUserService.test());
  }
  ngOnDestroy() {
  }

}
