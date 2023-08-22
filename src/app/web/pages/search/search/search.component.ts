import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { LocationService } from 'src/app/services/location.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private locationService: LocationService, private petService: PetsService, private route: ActivatedRoute) { }

  pets: Pet[] = []
  searchQuery: any
  locations = []
  location: string | null = ''
  statusMenu = false
  i = 0

  //Listener para cerrar y abrir menu
  @HostListener('document:click', ['$event'])
  onClickEvent(event: MouseEvent) {
    var target = event.target as HTMLElement
    var id = target['id']
    if (id != 'location') {
      this.closeMenu()
    }
  }

  ngOnInit(): void {
    this.locations = this.locationService.getLocations()
    this.locationService.location$.subscribe(rsp => { this.location = rsp, this.getSearch() })
    this.route.queryParamMap.subscribe(params => {
      this.searchQuery = params.get('query')
      this.getSearch()
    })

  }

  changeStatusMenu() {
    this.statusMenu = !this.statusMenu
  }

  getSearch() {
    this.pets = this.petService.getSearch(this.searchQuery) //ejemplo, aqui deberia traer lo q me retorna el back al mandarle el query
  }
  closeMenu() {
    this.statusMenu = false
  }
  updateLocation(location: string) {
    this.locationService.location$.next(location)
    this.location = location
  }
}
