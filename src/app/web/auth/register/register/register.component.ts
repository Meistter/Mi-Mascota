import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { SucessPopupComponent } from '../sucess-popup/sucess-popup.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
 
})
export class RegisterComponent {

  hide : boolean = true
  registerError : boolean = false //lo usaremos cuando las credenciales no sean correctas
  termsRequired: boolean = true
  responsabilityRequired: boolean = true
  toggleTerms(event: any){if(!event.checked){this.termsRequired = true}else{this.termsRequired = false}}
  toggleResponsability(event: any){if(!event.checked){this.responsabilityRequired = true}else{this.responsabilityRequired = false}}
  

  constructor(private router: Router, private matDialog: MatDialog, private authService: AuthService){}

  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required, Validators.email]), 
    password : new FormControl('',[Validators.required, Validators.minLength(6)]),
    date: new FormControl('',[Validators.required]),
    terms: new FormControl(false,[Validators.required]),
    responsability: new FormControl(false,[Validators.required]),
    })

    getRequiredMsg(){
      return 'Este campo es Requerido'
    }
    getEmailMsg(){
      return 'Por favor, Ingrese un email válido'
    }

    getRegisterError(){
      return 'Error al realizar el registro, por favor intenta más tarde'
    }
    openDialog(){
      this.matDialog.open(SucessPopupComponent)
    }
    register(){
      if(this.registerForm.valid){
        const value = this.registerForm.value
        const valueEmail = value.email
        const valuePass = value.password
        if (valueEmail && valuePass)
        this.authService.createUser(valueEmail, valuePass)
        .then((rsp) => {        
            this.openDialog()
            this.router.navigate(['/home']);
          
        });
      }
      
         
      
    }

    
}
