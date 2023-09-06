import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocationService } from 'src/app/services/location.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private location: LocationService, private authService: AuthService) { }
  app_logo = { url: 'https://i.postimg.cc/c4MgZPjb/logo-min.jpg', alt: 'logo-mi-mascota' }
  statusFirstMenu: boolean = false;
  statusSecondMenu: boolean = false;
  statusRightMenu: boolean = false;
  userLogued: boolean = false
  statusProfileMenu: boolean = false;
  userEmail: any = null
  query = new FormControl('', [Validators.required])
  locations = []
  locationMenuShow = false
  selectedLocation : string | null = 'Cualquiera'

  ngOnInit(): void {
    this.locations = this.location.getLocations()
    this.location.location$.subscribe(rsp=>{if(rsp)this.selectedLocation=rsp})
    this.authService.hasUser().subscribe(rsp => {
      if (rsp !== null) { this.userLogued = true } else { this.userLogued = false } this.userEmail = rsp?.email;
    })
  }
  //Listener para cerrar y abrir menu
  @HostListener('document:click', ['$event'])
  onClickEvent(event: MouseEvent) {
    var target = event.target as HTMLElement
    var id = target['id']
    if (id != 'open-animal-right' && id != 'open-animal-left') {
      this.closeFirstMenu()
      this.closeSecondMenu()
    }
    if (id == 'open-animal-left') {
      this.toggleFirstMenu()
    }
    if (id != 'open-menu-right') {
      this.closeRightMenu()
    }
    if (id == 'open-menu-right') {
      this.toggleRightMenu()
    }
    if (id != 'locationMenu') {
      this.locationMClose()
    }
    if(id != 'account_box' && id != 'user_email'){
      this.closeProfileMenu()
    }

  }
  //Emitimos para abrir menu sidenav lateral
  @Output() sideNavOpen = new EventEmitter<string>();
  openSideNav() {
    this.sideNavOpen.emit()
  }
  logout() {
    this.authService.logout()
    this.userLogued = false
    this.router.navigate(['/home'])
  }
  setLocation(selected :string){
    this.location.setLocation(selected)
    this.selectedLocation = selected    
  }
  send(event: { preventDefault: () => void; }) {
    event.preventDefault()
    if (this.query.valid) {
      this.router.navigate(['/search'], { queryParams: { query: this.query.value } })
    }
  }
  toggleFirstMenu() {
    this.statusFirstMenu = !this.statusFirstMenu;
  }
  openFirstMenu() {
    this.statusFirstMenu = true;
  }
  closeFirstMenu() {
    this.statusFirstMenu = false;
  }
  toggleSecondMenu() {
    this.statusSecondMenu = !this.statusSecondMenu;
  }
  openSecondMenu() {
    this.statusSecondMenu = true;
  }
  closeSecondMenu() {
    this.statusSecondMenu = false;
  }
  toggleRightMenu() {
    this.statusRightMenu = !this.statusRightMenu;
  }
  openRightMenu() {
    this.statusRightMenu = true;
  }
  closeRightMenu() {
    this.statusRightMenu = false;
  }
  locationMShow() {
    this.locationMenuShow = true
  }
  locationMtoggle() {
    this.locationMenuShow = !this.locationMenuShow
  }
  locationMClose() {
    this.locationMenuShow = false
  }
  openProfileMenu() {
    this.statusProfileMenu = true
  }
  toggleProfileMenu() {
    this.statusProfileMenu = !this.statusProfileMenu
  }
  closeProfileMenu() {
    this.statusProfileMenu = false
  }
}
