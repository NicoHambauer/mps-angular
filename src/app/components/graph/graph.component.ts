import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  meinVerbrauch:number[];
  timeInterval:string[];
  overshootGoal:number;
  color:string[];

  constructor() {
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
    
    var CO2Tracker = new Chart('myChart', {
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
            left: 50,
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
        }
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
