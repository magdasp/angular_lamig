import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {
  isHidden1 = true;
  isHidden2 = true;
  isHidden3 = true;
  isHidden4 = true;
  isHidden5 = true;
  isHidden6 = true;
  isHidden7 = true;
  isHidden8 = true;

  constructor() { }

  ngOnInit() {
  }

  noHidden(numHidden) {
    switch (numHidden) {
      case 1:
        if (this.isHidden1)
          this.isHidden1 = false;
        else
          this.isHidden1 = true;
        break;
      case 2:
        if (this.isHidden2)
          this.isHidden2 = false;
        else
          this.isHidden2 = true;
        break;
      case 3:
        if (this.isHidden3)
          this.isHidden3 = false;
        else
          this.isHidden3 = true;
        break;
      case 4:
        if (this.isHidden4)
          this.isHidden4 = false;
        else
          this.isHidden4 = true;
        break;
      case 5:
        if (this.isHidden5)
          this.isHidden5 = false;
        else
          this.isHidden5 = true;
        break;
      case 6:
        if (this.isHidden6)
          this.isHidden6 = false;
        else
          this.isHidden6 = true;
        break;
      case 7:
        if (this.isHidden7)
          this.isHidden7 = false;
        else
          this.isHidden7 = true;
        break;
      case 8:
        if (this.isHidden8)
          this.isHidden8 = false;
        else
          this.isHidden8 = true;
        break;
    }
  }
}
