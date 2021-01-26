import { Component, OnInit } from '@angular/core';
import {ItemserviceService} from 'src/app/services/itemservice.service'


@Component({
  selector: 'app-add-item-button',
  templateUrl: './add-item-button.component.html',
  styleUrls: ['./add-item-button.component.css']
})
export class AddItemButtonComponent implements OnInit {

   //message: ItemComponent;

  constructor(public itemservice: ItemserviceService) {
    //this.itemservice.currentMessage.subscribe(message => this.message = message)
   }

  ngOnInit(): void {
    //this.itemservice.currentMessage.subscribe(message => this.message = message);
  }

  addItem(): void {
    var textbox = document.getElementById("itemInput")!.nodeValue;
   
  }

  

}


