import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']  
 
})
export class LayoutComponent implements OnInit {
  constructor(private authService: AuthService){}
  panelOpenState = true;
  userLogued = false

  ngOnInit(): void {   
    this.authService.hasUser().subscribe(rsp => {
      if (rsp !== null) { this.userLogued = true } else { this.userLogued = false };
    })
  }
  logout(){
    this.authService.logout()
  }
}
