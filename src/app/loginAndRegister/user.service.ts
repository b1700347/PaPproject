import {User} from './user.model';
import {Injectable} from '@angular/core';

import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class UserService {
  private users: User[] = []; // define user store array of residence
  private userUpdated = new Subject<User[]>();

  constructor(private http: HttpClient) {}

  // retrieve all the user
  getUsers() {
    this.http.get<{message: string, users: any}> ('http://localhost:3000/api/users')
    .pipe(map((userData) => {
      return userData.users.map(user => {
        return {
          userID: user._id,
          username: user.username,
          emai: user.emai,
          password: user.password
        };
      });
    }))
    .subscribe((transformedUsers) => {
      this.users = transformedUsers;
      this.userUpdated.next([...this.users]);
    });
  }

  // function to get the copy of the original array in order human error prevention
  getUserUpdateListener() {
    return this.userUpdated.asObservable();
  }

  // add user into array
  addUser(username: string, email: string, password: string) {
    const user: User = {userID: null, username: username, email: email, password: password};
    this.http.post<{message: string}> ('http://localhost:3000/api/users', user)
    .subscribe((responseData) => {
      console.log(responseData.message);
      this.users.push(user);
      this.userUpdated.next([...this.users]); // copy original array
    });
  }

  getUser(username: string, password: string) {
    return{...this.users.find(p => p.username === username && p.password === password)};
  }

  setUserType(username: string, password: string) {
    const user: User = this.getUser(username, password);
    if (user.username.match('admin')) {
      return 'HouseOwner';
    }
    if (user.username.match(null)) {
      return 'Guess';
    } else {
      return 'Applicant';
    }
  }
}
