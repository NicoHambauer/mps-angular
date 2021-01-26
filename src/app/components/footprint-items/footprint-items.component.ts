import { Component, OnInit } from '@angular/core';
import { Item } from '../item/Item'

@Component({
  selector: 'app-footprint-items',
  templateUrl: './footprint-items.component.html',
  styleUrls: ['./footprint-items.component.css']
})
export class FootprintItemsComponent implements OnInit {

  static items: Item[] = [
    {
      id: 1,
      name: 'Avocado',
      co2value: 100,
    },
    {
      id: 2,
      name: 'Banane',
      co2value: 70,
    },
    {
      id: 3,
      name: 'Autofahrt',
      co2value: 200,
    },
    {
      id: 4,
      name: 'Heizung',
      co2value: 20,
    },
    {
      id: 5,
      name: 'GasHerd',
      co2value: 50,
    },
    {
      id: 6,
      name: 'Tomaten',
      co2value: 20,
    },
    {
      id: 7,
      name: 'Milch',
      co2value: 20,
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }


  //TODO 
  static addToItem(index:number, value:number){
    console.log(FootprintItemsComponent.items[index])
    FootprintItemsComponent.items[index].co2value += value;
    console.log(FootprintItemsComponent.items[index])
  }

  static getItems(){
    return FootprintItemsComponent.items;
  }

}
