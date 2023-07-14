import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { Router } from '@angular/router';

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
  

  constructor(private router: Router){}

  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required, Validators.email]), 
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
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

    register(event: Event){
      event.preventDefault();      
      if(this.registerForm.valid && !this.responsabilityRequired && !this.termsRequired){
        console.log(this.responsabilityRequired);
        console.log(this.termsRequired);
        
        
        console.log('Registrado y logueado');
        console.log(this.registerForm.get('date')?.value);
        this.router.navigate(['/home'])
      }else{}   
      
         
      
    }

    
}
