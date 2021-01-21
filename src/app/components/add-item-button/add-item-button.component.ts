import { Component, OnInit } from '@angular/core';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field'; 


@Component({
  selector: 'app-add-item-button',
  templateUrl: './add-item-button.component.html',
  styleUrls: ['./add-item-button.component.css']
})
export class AddItemButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void {
    var textbox = document.getElementById("itemInput")!.nodeValue;
  }

}


