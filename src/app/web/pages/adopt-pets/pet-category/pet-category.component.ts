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
  breed = 'Perro'
  location: string | null = 'Cualquiera'
  size = 'Pequeño'


  ngOnInit(): void {
    this.locations = this.locationService.getLocations()
    this.locationService.location$.subscribe(rsp => { if (rsp) this.location = rsp })
    //solo para pruebas
    setTimeout(() => {
      this.route.paramMap.subscribe(params => {
        this.categoryId = params.get('id')
        if (this.categoryId) {
          this.MainPets = this.petService.getPetsByCategory(this.categoryId)
          if (this.location !== 'Cualquiera') {
            this.LocPets = this.MainPets.filter(rsp => rsp.location == this.location)
            this.pets = this.LocPets
          }
          else { this.pets = this.MainPets, this.LocPets = this.MainPets }
          this.categoryName = this.categoryService.getCategoryName(this.categoryId)
        }

        if (this.categoryName == undefined) {
          this.router.navigate(['/none'])
        }

        this.route.queryParamMap.subscribe(params => {
          this.sizeFilter = params.get('filter')
          if (this.sizeFilter !== 'all')
            this.pets = this.LocPets.filter(rsp => rsp.size == this.sizeFilter)
          else { if (this.location == 'Cualquiera') { this.pets = this.MainPets } else { this.pets = this.LocPets } }
        })
      })
    }, 1000);
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
