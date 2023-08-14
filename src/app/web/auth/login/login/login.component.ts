import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide : boolean = true
  loginError : boolean = false //lo usaremos cuando las credenciales no sean correctas
  constructor(private router: Router, private authService: AuthService){}

  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]), 
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
    })

    getRequiredMsg(){
      return 'Este campo es Requerido'
    }
    getEmailMsg(){
      return 'Por favor, Ingrese un email válido'
    }

    getLoginError(){
      return 'Usuario o clave incorrectos'
    }

    login(){
      
      if(this.loginForm.valid){
        const value = this.loginForm.value
        const valueEmail = value.email
        const valuePass = value.password
        if (valueEmail && valuePass)
        this.authService.login(valueEmail, valuePass)
        .then((rsp) => {
          console.log(rsp);          
          this.router.navigate(['/home']);
        });
      }
    }
}
