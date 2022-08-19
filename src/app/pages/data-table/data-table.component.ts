import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';
import { DataService } from 'src/app/services/data/data.service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  object: Data;
  data: Data[] = [];
  cols: any[] = [];

  constructor(private dataService: DataService) { 
    this.object = {} as Data; 
  }

  ngOnInit(): void {
    this.dataService.getAll().subscribe(
      res => {
        this.data = res
      },
      error => {
        console.log(error)
      });

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Nombre' },
      { field: 'num', header: 'Numero' }
    ];
  }

}
