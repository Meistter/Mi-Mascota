import { Component, EventEmitter, HostListener, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  app_logo = {url:'https://i.postimg.cc/SsdKy57k/logo-min.jpg', alt:'logo-mi-mascota'}
  
  statusFirstMenu: boolean = false;
  statusSecondMenu: boolean = false;
  
  //Listener para cerrar y abrir menu
  @HostListener('document:click', ['$event'])
  onClickEvent(event: MouseEvent) {
    var target = event.target as HTMLElement
    var id = target['id'] 
    
    if(id != 'open-animal-right' && id!= 'open-animal-left' ){
      this.closeFirstMenu()
      this.closeSecondMenu()   
    }
    if(id == 'open-animal-left'){
      this.toggleFirstMenu()
    }
  }
  //Emitimos para abrir menu sidenav lateral
  @Output() sideNavOpen = new EventEmitter<string>();
  openSideNav(){
    this.sideNavOpen.emit()
  }
  
  toggleFirstMenu(){    
    this.statusFirstMenu = !this.statusFirstMenu;
  }
  openFirstMenu(){
    this.statusFirstMenu = true;     
  } 
  closeFirstMenu(){
    this.statusFirstMenu = false;       
  } 
  toggleSecondMenu(){
    this.statusSecondMenu = !this.statusSecondMenu;       
  }
  openSecondMenu(){
    this.statusSecondMenu = true;       
  }
  closeSecondMenu(){
    this.statusSecondMenu = false;       
  }
}
