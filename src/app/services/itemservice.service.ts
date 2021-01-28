import { NONE_TYPE } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { BehaviorSubject, empty } from 'rxjs';
import { Item } from '../components/item/Item'

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  items:Item[] = [
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
  ]

  constructor() { }

  getItems(){
    return this.items 
  }

  setItem(index:number, value:number){
    this.items[index].co2value += value;
  }
}
