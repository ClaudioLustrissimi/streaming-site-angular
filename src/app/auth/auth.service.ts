import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Boolean x login
  isLogged = false;
  
  constructor() { }

  isAuth(){
    return this.isLogged;
  }

}
