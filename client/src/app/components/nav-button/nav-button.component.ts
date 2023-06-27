import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent implements OnChanges, OnInit{
  @Input()text:string;
  
  constructor(){
    
  }
  ngOnInit(): void {
    console.log('init pe',this.text)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.text,'dil se')
  }
}
