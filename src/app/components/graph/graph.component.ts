import { Component, OnInit } from '@angular/core';
import { Chart, ChartSize } from 'chart.js';
import { FootprintItemsComponent } from '../footprint-items/footprint-items.component'
import { ItemserviceService } from 'src/app/services/itemservice.service'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  //message: ItemComponent;
  
  //Bar Chart
  CO2Tracker: any;

  meinVerbrauch:number[] = [];
  timeInterval:string[];
  overshootGoal:number = 130;
  color:string[] = [];

  constructor(public itemservice: ItemserviceService) {

    //this.itemservice.currentMessage.subscribe(message => this.message = message)

    //this.meinVerbrauch = [130, 150, 210, 90, 160, 150, 210]
    this.timeInterval = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
    this.initItems();
    this.setBarsColor();

     //Global Options
     Chart.defaults.global.defaultFontFamily = 'Arial';
     Chart.defaults.global.defaultFontSize = 18;
     Chart.defaults.global.defaultFontColor = 'black';
  }

  ngOnInit(): void {
    //this.itemservice.currentMessage.subscribe(message => this.message = message);
    
     this.CO2Tracker = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: this.timeInterval,
        datasets: [{
            label: 'CO2 Verbrauch',
            data: this.meinVerbrauch,
            backgroundColor: this.color,
            borderColor: 'black',
            borderWidth: 1,
            hoverBorderWidth: 2,
            hoverBorderColor: 'black',
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Deine CO2 Bilanz',
          fontSize: 25,
        },
        legend: {
          display: false,
          position: 'right',
          labels: {
            fontColor: 'black'
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          }
        },
        tooltips: {
          enabled: true,
          callbacks: {
            title: () => '',
          }


        },
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
            }
          }]
        },
        aspectRatio: 0.7,
        //ignores type safety
        // @ts-ignore
        //onResize: this.setAspectRatio,
        maintainAspectRatio: false,
      }
    }); 
  }

  initItems():void {
    FootprintItemsComponent.getItems().forEach( item => {
      this.meinVerbrauch.push(item.co2value)
    })
  }

  // platzhalterfunktionen
  addVerbrauch(dayIndex:number, verbrauch:number):void {
    this.meinVerbrauch[dayIndex] += verbrauch
  }

  /*
  substractVerbrauch(dayIndex:number, verbrauch:number) {
    this.meinVerbrauch[dayIndex] -= verbrauch
    //damit Verbrauch nicht negativ wird
    if (this.meinVerbrauch[dayIndex] < 0) {
      this.meinVerbrauch[dayIndex] = 0
    }
  }
  */

  addDay():void {
    this.meinVerbrauch.push(0)
  }

  setBarsColor():void {
    //ordnet je nach Verbrauch dem Balken rot oder grün als Farbe zu
    var i:number
    for (i = 0; i < this.meinVerbrauch.length; i++) {
      if (this.meinVerbrauch[i] > this.overshootGoal) {
        this.color.push('red')
      } else {
        this.color.push('green')
      }
    }
  }

}
