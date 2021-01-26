import { Component, OnInit } from '@angular/core';
import {ItemserviceService} from 'src/app/services/itemservice.service'
import { FootprintItemsComponent } from '../footprint-items/footprint-items.component'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //message: ItemComponent;

  tableData: any[] = [];

  constructor(public itemservice: ItemserviceService) {

    //this.itemservice.currentMessage.subscribe(message => this.message = message)

    FootprintItemsComponent.getItems().forEach( item => {
      this.tableData.push({ item: item.name, verbrauch: item.co2value })      
    });

  }

  ngOnInit(): void {

    //this.itemservice.currentMessage.subscribe(message => this.message = message);

  }

  sortNumberColumn(sort:any, columnName:string) {
    this.tableData = this.tableData.sort((p1, p2) => {
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
    });
  }

  /*
  sortColumn(columnName: string) {
    const dataType = typeof this.tableData[0][columnName];
    sortDirection = !sortDirection;
    
    switch(dataType) {
      case 'number':
        sortNumberColumn(sortDirection, columnName);
        break;
      }
      loadTableData(tableData);
    }

  }
  */

}