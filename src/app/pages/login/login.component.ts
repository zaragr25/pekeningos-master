import { Component, OnInit, OnDestroy } from '@angular/core';
import { FosUserService } from '../../services/fos-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private _FosUserService: FosUserService,) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
