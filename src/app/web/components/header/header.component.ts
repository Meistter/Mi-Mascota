import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() sideNavOpen = new EventEmitter<string>();

  openSideNav(){
    this.sideNavOpen.emit()
  }
  statusFirstMenu: boolean = false;
  statusSecondMenu: boolean = false;

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
