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
}
