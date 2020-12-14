import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  @Input()
  user: User;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  addUser() {
    this.userService.addUser(this.user).subscribe(
      (user) => {
        this.router.navigate(['admin', 'users']);
      }
    );
  }
}
