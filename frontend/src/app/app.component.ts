import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  homeLinkwasClicked = false;
  userLinkwasClicked = false;
  statsLinkwasClicked = false;
  loginLinkwasClicked = false;

  users(){
    console.log("link works");
    this.userLinkwasClicked = true;
    this.statsLinkwasClicked = false;
    this.homeLinkwasClicked = false;
  }

  stats(){
    console.log("stats link works also");
    this.statsLinkwasClicked = true;
    this.homeLinkwasClicked = false;
    this.userLinkwasClicked = false;
  }

  home(){
    console.log("redirecting to home page");
    this.homeLinkwasClicked = true;
    this.statsLinkwasClicked = false;
    this.userLinkwasClicked = false;
  }

  login(){
    console.log("log in was clicked!");
    this.loginLinkwasClicked = true;
  }

  first(){
    console.log("first was clicked");
  }


  second(){
    console.log("second was clicked");
  }

  third(){
    console.log("third was clicked");
  }

  contact()  {
    alert("Contact mackke90@gmail.com for more info!");
  }


  logbtn(){
    console.log("login/out btn was clicked");
  }
}
