import { Component, OnInit } from '@angular/core';
import { Chart, ChartSize } from 'chart.js';
import { ItemComponent } from '../item/item.component';
import {ItemserviceService} from 'src/app/services/itemservice.service'



@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  //message: ItemComponent;

  meinVerbrauch:number[];
  timeInterval:string[];
  overshootGoal:number;
  color:string[];
  CO2Tracker: any;

  Co2Items: ItemComponent[];

  

  constructor(public itemservice: ItemserviceService) {

    //this.itemservice.currentMessage.subscribe(message => this.message = message)


    this.meinVerbrauch = []
    //testWerte
    this.meinVerbrauch.push(130);
    this.meinVerbrauch.push(150);
    this.meinVerbrauch.push(210);
    this.meinVerbrauch.push(150);
    this.meinVerbrauch.push(150);
    this.meinVerbrauch.push(150);
    this.meinVerbrauch.push(210);
    
    this.timeInterval = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

    this.Co2Items = []

    this.overshootGoal = 200
    this.color = []
    this.getColor();

     //Global Options
     Chart.defaults.global.defaultFontFamily = 'Arial';
     Chart.defaults.global.defaultFontSize = 18;
     Chart.defaults.global.defaultFontColor = 'grey';
  }

  ngOnInit(): void {
  
    //nicht mehr benötigt, da npm install chart.js ausgeführt wurde
    //<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js "></script>


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
            hoverBorderWidth: 3,
            hoverBorderColor: 'black',
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Deine CO2 Bilanz',
          fontSize: 25
        },
        legend: {
          display: false,
          position: 'right',
          labels: {
            fontColor: 'grey'
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

  getColor():void {
    
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

  /* Not needed if maintainAspectRatio stays false
  setAspectRatio(Chart:Chart, newChartsize:ChartSize):void{
    var ratio = newChartsize.width / (1920 - 500);
    Chart.aspectRatio = 2 * ratio;
    //console.log(newChartsize)
    //console.log(Chart)
  }
  */

  // platzhalterfunktionen
  addVerbrauch(index:number, verbrauch:number):void {
    this.meinVerbrauch[index] += verbrauch
  }

  addDay():void {
    this.meinVerbrauch.push(0)
  }

  substractVerbrauch(index:number, verbrauch:number) {
    this.meinVerbrauch[index] -= verbrauch
    //damit Verbrauch nicht negativ wird
    if (this.meinVerbrauch[index] < 0) {
      this.meinVerbrauch[index] = 0
    }
  }

}
