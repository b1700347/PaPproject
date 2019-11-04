import { Component, OnInit } from '@angular/core';

import {Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public userService: UserService) { }

  user: User;
  userID: string;

  ngOnInit() {
  }

  login(form: NgForm): void {
    if (form.value.username === 'admin' && form.value.password === 'admin') {
     this.router.navigate(['setupResidence']);
     alert('Welcome ' + form.value.username);
    }
    if ( this.userService.getUser(form.value.username, form.value.password) !== null) {
      this.router.navigate(['viewResidence']);
    } else {
      alert('Invalid credentials');
    }
  }
}
