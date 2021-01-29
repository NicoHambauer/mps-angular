import { NONE_TYPE } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { BehaviorSubject, empty } from 'rxjs';
import { Item } from '../components/item/Item'

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  max_optimal_co2_footprint_per_day:number = 2000/365; //in kg/days
  
  personal_overshoot_day_percentage:number = 100;

  items:Item[] = [
    {
      id: 1,
      name: 'Avocado',
      co2value: 6,
      date: 'Mo'
    },
    {
      id: 2,
      name: 'Banane',
      co2value: 10,
      date: 'Di'
    },
    {
      id: 3,
      name: 'Autofahrt',
      co2value: 15,
      date: 'Mi'
    },
    {
      id: 4,
      name: 'Heizung',
      co2value: 20,
      date: 'Do'
    },
    {
      id: 5,
      name: 'GasHerd',
      co2value: 4,
      date: 'Fr'
    },
    {
      id: 6,
      name: '',
      co2value: 0,
      date: 'Sa'
    },
    {
      id: 7,
      name: '',
      co2value: 0,
      date: 'So'
    },
  ]

  constructor() { }

  getItems(){
    return this.items 
  }

  setItem(index:number, value:number){
    this.items[index].co2value += value;
  }

  getWeeklyOvershootDay(){
    var weekly_consume = 0;
    this.getItems().forEach(item => {
      weekly_consume += item.co2value;
    });
    var daily_consume = weekly_consume / 7;

    var days_till_personal_overshoot_day = 365 / (daily_consume / this.max_optimal_co2_footprint_per_day)

    this.personal_overshoot_day_percentage = days_till_personal_overshoot_day/365

    var this_year = (new Date()).getFullYear()
    var date_of_beginning_of_this_year = new Date(this_year, 0, 0, 0, 0 + 1, 0 )
    var overshootDay = new Date(date_of_beginning_of_this_year.setDate(date_of_beginning_of_this_year.getDate() + days_till_personal_overshoot_day))
    return overshootDay;
  }

  getPersonal_overshoot_day_percentage(){
    return this.personal_overshoot_day_percentage * 100;
  }

  
}
