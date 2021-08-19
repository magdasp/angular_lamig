import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  dayName = new Array(7);
  monthName = new Array(12);
  dateStr = '';

  constructor() {
    this.dayName[0] = "Niedziela ";
    this.dayName[1] = "Poniedziałek ";
    this.dayName[2] = "Wtorek ";
    this.dayName[3] = "Środa ";
    this.dayName[4] = "Czwartek ";
    this.dayName[5] = "Piątek ";
    this.dayName[6] = "Sobota ";

    this.monthName[0] = "stycznia ";
    this.monthName[1] = "lutego ";
    this.monthName[2] = "marca ";
    this.monthName[3] = "kwietnia ";
    this.monthName[4] = "maja ";
    this.monthName[5] = "czerwca ";
    this.monthName[6] = "lipca ";
    this.monthName[7] = "sierpnia ";
    this.monthName[8] = "września ";
    this.monthName[9] = "października ";
    this.monthName[10] = "listopada ";
    this.monthName[11] = "grudnia ";

    this.dateStr = this.getDateStr();
    console.log(this.dateStr);
   }

  ngOnInit() {
  }

  getDateStr(){
    var today = new Date()
    var weekDay = today.getDay()
    var month = today.getMonth()
    var day = today.getDate()
    var year = today.getFullYear()

    return this.dayName[weekDay] + "," + " " + day + " " + this.monthName[month] + year
  }

}
