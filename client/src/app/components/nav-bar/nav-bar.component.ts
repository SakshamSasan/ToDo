import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  title:string;
  btnText:string='Sign Up';
  constructor(){
    this.title='To Do';
  }

  ngOnInit(): void {
    
  }
}
