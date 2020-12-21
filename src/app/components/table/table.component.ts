import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableData: any[];
  //sortDirection:boolean;

  constructor() {
    this.tableData = [
      { item: 'Autofahrt', verbrauch: 100, datum: 'Mo' },
      { item: 'Heizung', verbrauch: 20, datum: 'Mo' },
      { item: 'Gas', verbrauch: 50, datum: 'Di' }
    ];
    //this.sortDirection = false;
  }

  ngOnInit(): void {

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
