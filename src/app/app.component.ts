import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'azurian-view';
  items: MenuItem[] = [];

  constructor(private router: Router){}  
  
  ngOnInit() {
    this.items = [
        {
          label:'Azurian',
          icon:'pi pi-fw pi-home',
          command: (event) => { this.onClickHome(); }
        }
    ];
  }
  onClick():void{
    this.router.navigate(['/data-table'])
  }
  onClickHome():void{
    this.router.navigate(['/'])
  }
}
