import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';

import { AuthenticationService } from './_services';
import { Observable } from 'rxjs';
import { User } from '@/_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  env = environment;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
  ) { }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

  get isLoggedIn() {
      return this.authenticationService.isLoggedIn;
  }
}
