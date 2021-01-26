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
  //sortDirection:boolean;

  constructor(public itemservice: ItemserviceService) {

    //this.itemservice.currentMessage.subscribe(message => this.message = message)
    FootprintItemsComponent.getItems().forEach( item => {
      this.tableData.push({ item: item.name, verbrauch: item.co2value })      
    });
    //this.sortDirection = false;
  }

  ngOnInit(): void {

    //this.itemservice.currentMessage.subscribe(message => this.message = message);


    /*function sortColumn(columnName) {
        const dataType = typeof tableData[0][columnName];
        sortDirection = !sortDirection;

        switch(dataType) {
            case 'number':
            sortNumberColumn(sortDirection, columnName);
            break;
        }

        loadTableData(tableData);
    }

    function sortNumberColumn(sort, columnName) {
        tableData = tableData.sort((p1, p2) => {
            return sort ? p1[ColumnName] - p2[columnName] : p2[ColumnName] - p1[columnName]
        });
    } */


  }

}
