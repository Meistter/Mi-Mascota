import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rescue-request',
  templateUrl: './rescue-request.component.html',
  styleUrls: ['./rescue-request.component.scss']
})
export class RescueRequestComponent {

  requestForm = new FormGroup({
    user : new FormControl({ value: '', disabled: true }), 
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
    })
  router: any;

    getRequiredMsg(){
      return 'Este campo es Requerido'
    }
    getEmailMsg(){
      return 'Por favor, Ingrese un email válido'
    }

    getLoginError(){
      return 'Usuario o clave incorrectos'
    }

    login(event: Event){
      event.preventDefault();
      // if(this.loginForm.valid){
      //   console.log('logueado');
      //   this.router.navigate(['/home'])
      // }else{}      
      
    }
    
}
