import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rescue-request',
  templateUrl: './rescue-request.component.html',
  styleUrls: ['./rescue-request.component.scss']
})
export class RescueRequestComponent {
  constructor(private router: Router) { }

  requestForm = new FormGroup({
    user: new FormControl({ value: '', disabled: true }),
    photos: new FormControl('', [Validators.required]),
    breed: new FormControl('', [Validators.required]),
    hurt: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
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
  tipoAnimal = ['Perro', 'Gato', 'Ave']
  size = ['Pequeño', 'Mediano', 'Grande']
  state = ['Lara', 'Distrito Capital', 'Carabobo', 'Zulia', 'Aragua']
  city = ['Barquisimeto', 'Valencia', 'Caracas']

  login(event: Event) {
    event.preventDefault();
    if (this.requestForm.valid) {
      console.log('formulario enviado');
      window.alert('formulario enviado')
      this.router.navigate(['/home'])

    } else { }

  }
}
