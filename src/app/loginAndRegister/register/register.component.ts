import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public userService: UserService) {}

  onAddUser(form: NgForm) {
    if (form.invalid) {
      alert('Please Fill up the form correctly');
      return;
    }
    if (form.value.password.match(form.value.confirmPassword)) {
      this.userService.addUser(form.value.username, form.value.email, form.value.password);
      alert('New User Created!');
      form.resetForm();
    }
  }
}
