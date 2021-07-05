import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  @Input()hasMore!: boolean;
  start:number = 10;
  


  constructor() { 
    
  }

  ngOnInit() {
   
    
  }

  

  

  
      
    
  

}
