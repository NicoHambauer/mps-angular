import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, empty } from 'rxjs';
import { ItemComponent } from '../components/item/item.component'

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  emptyItem = new ItemComponent();

  private messageSource = new BehaviorSubject(this.emptyItem);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeItem(item: ItemComponent) {
    this.messageSource.next(item)
  }
}
