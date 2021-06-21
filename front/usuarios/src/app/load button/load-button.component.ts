import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  @Input() hasMore: boolean = true;
  @Input() start:any;
  @Input() usuarios:any


  constructor() { }

  ngOnInit() {
    
    console.log(this.usuarios)
  }

  verificar(){
    if (this.start == this.usuarios) {
            this.hasMore = false;
    } 
      
    
  }

}
