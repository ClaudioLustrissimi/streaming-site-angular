import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MATCH_PASS } from '../confirmpass.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  signupForm !: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router
  ){}
  

  ngOnInit(){
    this.signupForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/)]),
      ripetipassword: new FormControl('')
    },
    {validators:  MATCH_PASS}
    )
  }
  
  
  
  signUp(){ 
    this.http.post<any>("http://localhost:3000/posts", this.signupForm.value)
    .subscribe(res =>{
      alert("Registrazione avvenuta con successo");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("Qualcosa è andato storto riprova più tardi");
    })
  }

  get Name(): FormControl{
    return this.signupForm.get("nome") as FormControl;
  }

  get LastName(): FormControl{
    return this.signupForm.get("cognome") as FormControl;
  }

  get Email(): FormControl{
    return this.signupForm.get("email") as FormControl;
  }

  get Password(): FormControl{
    return this.signupForm.get("password") as FormControl;
  }

}
