import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abuse-report',
  templateUrl: './abuse-report.component.html',
  styleUrls: ['./abuse-report.component.scss']
})
export class AbuseReportComponent {
  constructor(private router: Router){}

  reportForm = new FormGroup({  
    breed : new FormControl('',[Validators.required]),
    size : new FormControl('',[Validators.required]),
    photos : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),      
    hurt : new FormControl('',[Validators.required]),   
    sick : new FormControl('',[Validators.required]),   
    state : new FormControl('',[Validators.required]),
    city : new FormControl('',[Validators.required]),  
    address : new FormControl('',[Validators.required]),
    location : new FormControl('',),  
    }) 

    getRequiredMsg(){
      return 'Este campo es Requerido'
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
      if(this.reportForm.valid){
        console.log('formulario enviado');        
        window.alert('formulario enviado')
        this.router.navigate(['/home'])
        
      }else{}      
      
    }
}
