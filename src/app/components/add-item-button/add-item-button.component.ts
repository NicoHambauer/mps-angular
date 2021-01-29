import { Component, OnInit } from '@angular/core';
import {ItemserviceService} from 'src/app/services/itemservice.service'


@Component({
  selector: 'app-add-item-button',
  templateUrl: './add-item-button.component.html',
  styleUrls: ['./add-item-button.component.css']
})
export class AddItemButtonComponent implements OnInit {

  //@ts-ignore
  co2valueToAdd:string;

   //message: ItemComponent;

  constructor(public itemservice: ItemserviceService) {
    //this.itemservice.currentMessage.subscribe(message => this.message = message)
   }

  ngOnInit(): void {
    //this.itemservice.currentMessage.subscribe(message => this.message = message);
  }

  addItem(): void {
    var textbox = this.co2valueToAdd
    if(textbox != null){
      var addValue = parseInt(textbox);
      if(addValue != NaN){
        this.itemservice.setItem(4, addValue);
      }
    }
  }

  

}


