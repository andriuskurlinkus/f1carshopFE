import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from '../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  selectedUser: User;
  action: string;

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit(): void {
    // this.userService.findAll().subscribe(data => {
    //   this.users = data;
    // });
    this.userService.getUsers().subscribe(response => this.handleSuccessfulResponse(response),
      );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params[`action`];
      }
    );
  }
  // tslint:disable-next-line:typedef
  handleSuccessfulResponse(responce) {
    this.users = responce;
  }
  // tslint:disable-next-line:typedef
  addUser() {
    this.selectedUser = new User();
    this.router.navigate(['admin', 'users'], { queryParams: {action: 'add'} });
  }
}
