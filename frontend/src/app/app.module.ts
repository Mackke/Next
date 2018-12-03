import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from "./login/login.component";



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    StatsComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
