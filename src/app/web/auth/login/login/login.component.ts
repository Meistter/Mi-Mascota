import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // loginResponse$ = new Observable<string>()
  loginResponse$ = new BehaviorSubject<any>(1)
  hide: boolean = true
  message: boolean = false
  loginError: boolean = false //lo usaremos cuando las credenciales no sean correctas
  redirectRoute: string | null = ''
  valor : string | null = null
  constructor(private router: Router, private authService: AuthService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      if (params.get('query')) {
        this.message = true
      }
      this.redirectRoute = params.get('route')
    })
  }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  getRequiredMsg() {
    return 'Este campo es Requerido'
  }
  getEmailMsg() {
    return 'Por favor, Ingrese un email válido'
  }

  getLoginError() {
    return 'Usuario o clave incorrectos'
  }

  login() {

    if (this.loginForm.valid) {
      const value = this.loginForm.value
      const valueEmail = value.email
      const valuePass = value.password
      if (valueEmail && valuePass) {
      this.authService.login(valueEmail, valuePass) // ! esto es lo que responde el error de logueo
          .then((rsp) => {
            
            if (this.redirectRoute) {
              this.router.navigate(['/', this.redirectRoute]);
            } else {
              this.router.navigate(['/home']);
            }
          })  
          .catch(rsp =>{this.valor = 'Usuario o contraseña Incorrectos'})       
      }
    }    
  }
}
