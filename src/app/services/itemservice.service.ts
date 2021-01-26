import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, empty } from 'rxjs';
import { Item } from '../components/item/Item'

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  emptyItem = new Item();

  private messageSource = new BehaviorSubject(this.emptyItem);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeItem(item: Item) {
    this.messageSource.next(item)
  }
}
