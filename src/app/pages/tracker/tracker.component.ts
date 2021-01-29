import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ItemserviceService } from '../../services/itemservice.service'


@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  constructor(public itemservice: ItemserviceService) { }

  ngOnInit(): void {
  }

}
