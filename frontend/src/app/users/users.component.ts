import { Component, OnInit } from '@angular/core';
import {Users} from "./users.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  array_name: Users[];
  user = {
    name: "marcus",
    lastname: "karlsson",
    username: "mackke",
    password: "pw"
  };

  user2 = {
    name: "marcuz",
    lastname: "karlsson",
    username: "mackkeeee",
    password: "pw2"
  };


  constructor() {

  }

  ngOnInit() {

    this.array_name = [this.user, this.user2]

  }







}
