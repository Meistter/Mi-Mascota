import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private router: Router){}

  contactForm = new FormGroup({  
    email : new FormControl('',[Validators.required, Validators.email]),
    copy : new FormControl(false,[Validators.required]),
    phone : new FormControl('',[]),
    description : new FormControl('',[Validators.required]),
    }) 
    
    prueba = true

    getRequiredMsg(){
      return 'Este campo es Requerido'
    }    
    getEmailMsg(){
      return 'Por favor, Ingrese un email válido'
    }

    breed = ['Perro','Gato','Ave']
    health = ['Buena','En Tratamiento', 'En Terapias']
    age = ['Recien nacido','Menor a 1 año','1 año','2 años','3 años', '4 años', '5 años', '6 años', '7 años', '8 años', '9 años', '10 años','Mayor a 10 años']
    castrated = ['Si','No']
    sick = ['Si','No']
    size = ['Pequeño','Mediano','Grande']
    state = ['Lara','Distrito Capital','Carabobo','Zulia','Aragua']
    city = ['Barquisimeto','Valencia','Caracas']
    hurt = ['Si','No']
   
    send(event: Event){
      event.preventDefault();
      if(this.contactForm.valid){
        console.log('formulario enviado');        
        window.alert('formulario enviado')
        this.router.navigate(['/home'])
        
      }else{}      
      
    }
    
}
