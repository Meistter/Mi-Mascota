import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent{

  @Input() related : any = []
  @Input() urlRedirect : string = 'false'
  
}
