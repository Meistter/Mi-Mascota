import { NgModule } from '@angular/core';
import { WebRoutingModule } from './web-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        WebRoutingModule,
        MatIconModule,
        MatExpansionModule,        
        MatSidenavModule,
        ReactiveFormsModule       
    ]
})
export class WebModule { }
