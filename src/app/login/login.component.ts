import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ){}

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  
  
  loginControl(){
    this.http.get<any>("http://localhost:3000/posts")
    .subscribe(res =>{
      const user = res.find((a:any) =>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });
      if(user){
        alert("Sei Online");
        this.authService.isLogged = true;
        this.loginForm.reset();
        this.router.navigate(['/'])
      }else
      alert("Utente non trovato")
    },err =>{
      alert("Qualcosa è andato storto riprova più tardi")
    }
    )
  }

}
