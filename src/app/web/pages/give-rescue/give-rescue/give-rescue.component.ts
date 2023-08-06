import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-give-rescue',
  templateUrl: './give-rescue.component.html',
  styleUrls: ['./give-rescue.component.scss']
})
export class GiveRescueComponent {
  constructor(private router: Router) { }

  rescueForm = new FormGroup({
    breed: new FormControl('', [Validators.required]),
    photos: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    hurt: new FormControl('', [Validators.required]),
    remarks: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    location: new FormControl('',),
  })

  getRequiredMsg() {
    return 'Este campo es Requerido'
  }

  breed = ['Perro', 'Gato', 'Ave']
  hurt = ['Si', 'No']
  size = ['Pequeño', 'Mediano', 'Grande']
  state = ['Lara', 'Distrito Capital', 'Carabobo', 'Zulia', 'Aragua']
  city = ['Barquisimeto', 'Valencia', 'Caracas']

  send(event: Event) {
    event.preventDefault();
    if (this.rescueForm.valid) {
      console.log('formulario enviado');
      window.alert('formulario enviado')
      this.router.navigate(['/home'])

    } else { }

  }
}
