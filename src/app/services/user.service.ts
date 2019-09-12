import {User} from '../models/Users.model';
import {Subject} from 'rxjs';

export class UserService {
  private user: User[] = [
    {
      firstname: 'Henry',
      lastname: 'Ndefo',
      email: 'henryndefo@gmail.com',
      drinkPreference: 'water',
      hobbies: [
        'eat',
        'coding',
        'sport',
        'basketball'
      ]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.user.slice());
  }
  addUser(user: User) {
    this.user.push(user);
    this.emitUsers();
  }
}
