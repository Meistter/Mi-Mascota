import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { CategoryService } from 'src/app/services/category.service';
import { LocationService } from 'src/app/services/location.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-pet-category',
  templateUrl: './pet-category.component.html',
  styleUrls: ['./pet-category.component.scss']
})
export class PetCategoryComponent {

  constructor(private locationService: LocationService, private petService: PetsService, private route: ActivatedRoute, private router: Router, private categoryService: CategoryService) { }

  pets: Pet[] = []
  MainPets: Pet[] = []
  LocPets: Pet[] = []
  locations = []
  statusMenu = false
  statusCategoryMenu = false
  statusSizeMenu = false
  categoryName: string | undefined = undefined
  categoryId: string | null = null
  sizeFilter: string | null = null
  breed = ''
  location: string | null = 'Cualquiera'
  size = ''


  ngOnInit(): void {

    // ! Todo este proceso esta basado en 3 filtrados, primero por ID de categoria (tipo de animal), luego por ubicacion y por ultimo por tamaño, siendo este ultimo el que controla el array a mostrar
    // this.locations = this.locationService.getLocations()
    setTimeout(() => {
      this.route.paramMap.subscribe(params => {
        this.categoryId = params.get('id')
        if (this.categoryId) {
          this.pets = this.petService.getPetsByCategory(this.categoryId)
          this.categoryName = this.categoryService.getCategoryName(this.categoryId)
          if (this.categoryName == undefined) {
            this.router.navigate(['/none'])
          }
        }
      })
      this.locationService.location$.subscribe(location => {
        this.sizeFilter = 'all'
        if (this.categoryId) {
          if (location) {
            this.LocPets = this.petService.getPetsByCategory(this.categoryId)
            this.pets = this.LocPets
          }
        }

        this.route.queryParamMap.subscribe(params => {
          this.sizeFilter = params.get('filter')
          if (this.sizeFilter) {
            if (this.sizeFilter !== 'all') {
              this.pets = this.LocPets.filter(rsp => rsp.size == this.sizeFilter)
            } else { this.pets = this.LocPets }
          } else {
            this.pets = this.LocPets
          }
        })
      })

    }, 1000);
    //! Si no entiendo esta logica la proxima vez, debo deternerme a pensar porque si esta enredada jajaja
    //! El tercer filtro controla lo que se muestra, todos se ejecutan al cambiar de categoria, el 2do y tercero al cambiar ubicacion y el tercero independiente
    //! Realmente no se si es buena practica anidar subscribes ya que no se si se duplican al ejecutarse continuamente
  }
  //Listener para cerrar y abrir menu
  @HostListener('document:click', ['$event'])
  onClickEvent(event: MouseEvent) {
    var target = event.target as HTMLElement
    var id = target['id']
    if (id != 'category' && id != 'location' && id != 'size') {
      this.closeMenu()
      this.closeCategoryMenu()
      this.closeSizeMenu()
    }
  }
  getFilterName() {
    if (this.sizeFilter == 'big') {
      return 'Grande'
    } else {
      if (this.sizeFilter == 'regular') {
        return 'Mediano'
      } else {
        if (this.sizeFilter == 'small') {
          return 'Pequeño'
        } else { return 'Todos' }
      }
    }
  }
  changeStatusMenu() {
    this.statusMenu = !this.statusMenu
  }
  changeStatusCategoryMenu() {
    this.statusCategoryMenu = !this.statusCategoryMenu
  }
  changeStatusSizeMenu() {
    this.statusSizeMenu = !this.statusSizeMenu
  }
  updateLocation(location: string) {
    this.locationService.location$.next(location)
    this.location = location
  }
  closeMenu() {
    this.statusMenu = false
  }
  closeCategoryMenu() {
    this.statusCategoryMenu = false
  }
  closeSizeMenu() {
    this.statusSizeMenu = false
  }
}
