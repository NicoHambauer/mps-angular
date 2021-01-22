import { Component, OnInit } from '@angular/core';
import { Itemtemplate } from 'src/app/itemtemplate';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items: Itemtemplate[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items.push(new Itemtemplate('Autofahrt', 100));
    this.items.push(new Itemtemplate('Heizung', 20));
    this.items.push(new Itemtemplate('Gas', 50));
    

  }

}
