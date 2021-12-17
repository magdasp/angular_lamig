import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit {
  
  @ViewChild('myCanvas1') canvasRef1: ElementRef;
  x1 = 10;   //lewy gorny rog rysowanej figury
  y1 = 40;
  xek1: Array<number> ;   //wspolrzedne do wyswietlania gwiazdek
  yek1: Array<number>;
  w: Array<string> = [];   //pola wyswietlane
  p: Array<string> = [];   //pola prawidlowo wypelnione
  ctx1: CanvasRenderingContext2D;
  good1: boolean;
  messageGood = "Dobrze !  Gratuluję !";
  messageBad = "Niestety !  Źle !";

  @ViewChild('myCanvas2') canvasRef2: ElementRef;
  x2 = 30;   //lewy gorny rog rysowanej figury
  y2 = 60;
  t1: Array<number>;   //wspolrzedne do wyswietlania liczb z lewej strony
  u1: Array<number>;
  t = 330;
  u = 100;
  t2: Array<number>;   //wspolrzedne do wyswietlania liczb z prawej strony
  u2: Array<number>;
  w1: Array<string> = [];   //pola wyswietlane z lewej
  p1: Array<string> = [];   //pola prawidlowo wypelnione
  w2: Array<string> = [];   //liczby wyswietlane z prawej
  p2: Array<string> = [];
  s: Array<number> = [];   // tablica pomocnicza do sprawdzenia rozw.
  licz = 100;   // pozycja wybrana z prawej strony (100 - nie)
  ctx2: CanvasRenderingContext2D;
  def: boolean;
  
  @ViewChild('myCanvas3') canvasRef3: ElementRef;
  t3: Array<number>;   //wspolrzedne do rysowania kropek i linii
  u3: Array<number>;
  k3: Array<string> = [];   //pola z kropkami
  p3: Array<Point> = [];   //punkty kolejnych linii
  start: Point;   //punkt poczatkowy aktualnie rysowanej linii
  end: Point;   //punkt koncowy aktualnie rysowanej linii
  ilp: number = 0;   //ilosc zapamietanych punktow
  ctx3: CanvasRenderingContext2D;
  good3: boolean;

  constructor() { 
  }

  ngOnInit() {
    this.init1();
    this.paint1();
    this.init2();
    this.paint2();
    this.init3();
    this.paint3();
  }
  
  init1() {
    let x = this.x1;
    let y = this.y1;
    this.xek1= 
     [     x+35,x+65,x+95,x+125,x+155,x+185,
      x+ 5,     x+65,x+95,x+125,x+155,      x+215,
      x+ 5,x+35,     x+95,x+125,      x+185,x+215,
      x+ 5,x+35,x+65,           x+155,x+185,x+215,
      x+ 5,x+35,x+65,           x+155,x+185,x+215,
      x+ 5,x+35,     x+95,x+125,      x+185,x+215,
      x+ 5,     x+65,x+95,x+125,x+155,      x+215,
           x+35,x+65,x+95,x+125,x+155,x+185];
    this.yek1 = 
     [y+30,y+30,y+30,y+30,y+30,y+30,
      y+60,y+60,y+60,y+60,y+60,y+60,
      y+90,y+90,y+90,y+90,y+90,y+90,
      y+120,y+120,y+120,y+120,y+120,y+120,
      y+150,y+150,y+150,y+150,y+150,y+150,
      y+180,y+180,y+180,y+180,y+180,y+180,
      y+210,y+210,y+210,y+210,y+210,y+210,
      y+240,y+240,y+240,y+240,y+240,y+240];
    var i;
    for (i = 0; i < 48; i++) {
      this.w.push("");
      this.p.push("");
    }
    this.w[36]="*";
    this.p[4]=this.p[7]=this.p[16]=this.p[19]=this.p[29]=this.p[33]=this.p[36]=this.p[44] = "*";

    this.ctx1 = this.canvasRef1.nativeElement.getContext('2d');
  }

  paint1() {
    let x = this.x1;
    let y = this.y1;
    let ctx = this.ctx1;
    
    ctx.clearRect(x,y,240,240);
    ctx.beginPath();
    ctx.rect(x,y,240,240);
    ctx.rect(x+30,y,30,240);
    ctx.rect(x+90,y,30,240);
    ctx.rect(x+150,y,30,240);
    ctx.rect(x+210,y,30,240);

    ctx.rect(x,y+30,240,30);
    ctx.rect(x,y+90,240,30);
    ctx.rect(x,y+150,240,30);
    ctx.rect(x,y+210,240,30);
    ctx.rect(x,y,240,240);
    ctx.stroke();

    ctx.fillStyle = "lightgray";
    ctx.fillRect(x+1,y+1,29,29);
    ctx.fillRect(x+31,y+31,29,29);
    ctx.fillRect(x+61,y+61,29,29);
    ctx.fillRect(x+91,y+91,29,29);
    ctx.fillRect(x+121,y+121,29,29);
    ctx.fillRect(x+151,y+151,29,29);
    ctx.fillRect(x+181,y+181,29,29);
    ctx.fillRect(x+211,y+211,29,29);
      
    ctx.fillRect(x+1,y+211,29,29);
    ctx.fillRect(x+31,y+181,29,29);
    ctx.fillRect(x+61,y+151,29,29);
    ctx.fillRect(x+91,y+121,29,29);
    ctx.fillRect(x+121,y+91,29,29);
    ctx.fillRect(x+151,y+61,29,29);
    ctx.fillRect(x+181,y+31,29,29);
    ctx.fillRect(x+211,y+1,29,29);
    ctx.stroke();
    ctx.closePath();

    ctx.font = "30px TimesRoman";
    ctx.fillStyle = "red";
    var i;
    for (i = 0; i < 48; i++) {
       ctx.fillText(this.w[i],this.xek1[i],this.yek1[i]);
    }
  }

  click1(e: MouseEvent) {
    var x = e.offsetX;
    var y = e.offsetY;
    //var coords = "X coords: " + x + ", Y coords: " + y;
    //console.log(coords);

    var i;
    for (i = 0; i < 48; i++) {  //sprawdzenie miejsca klikniecia
      if (this.xek1[i]-5 < x && x < this.xek1[i]+25 &&
         this.yek1[i]-30 < y && y < this.yek1[i]) {
         if (this.w[i] == "*")
            this.w[i] = "";    //usuniecie gwiazdki
         else
            this.w[i] = "*";   //wstawienie gwiazdki
         break;
         }
    }
    this.paint1();
  }

  check1() {
    this.good1 = true;
    var i;
    for (i = 0; i < 48; i++) {
       if (this.w[i] != this.p[i]) {
          alert(this.messageBad);
          this.good1 = false;
          break;
       }
     }
     if (this.good1 == true)
        alert(this.messageGood);
  }

  clear1() {
    var i;
    for (i = 0; i < 48; i++) {
       this.w[i] = "";
    }
    this.w[36]="*";
    this.paint1();
  }

  solve1() {
    var i;
    for (i = 0; i < 48; i++) {
       this.w[i] = this.p[i];
    }
    this.paint1();
  }

  //--------------------
  init2() {
    let x = this.x2;
    let y = this.y2;
    let t = this.t;
    let u = this.u;
    this.t1 = [x-10,x+110,x+230,
      x+50,x+110,x+170,
      x-10,x+50,x+110,x+170,x+230,
      x+50,x+110,x+170,
      x-10,x+110,x+230];
    this.u1 = [y+10,y+10,y+10,
      y+70,y+70,y+70,
      y+130,y+130,y+130,y+130,y+130,
      y+190,y+190,y+190,
      y+250,y+250,y+250];  
    this.t2 = [t,t+40,t+80,t+120,t+160,
      t,t+40,t+80,
      t,t+40,t+80,
      t,t+40,t+80,t+120,t+160,t+200];
    this.u2 = [u,u,u,u,u,
      u+50,u+50,u+50,
      u+100,u+100,u+100,
      u+150,u+150,u+150,u+150,u+150,u+150];
    this.p1 = ["15","20","20","5","10","5",
      "20","10","5","5","15",
      "5","5","10","20","15","20"];
    this.p2 = ["20","20","20","20","20",
      "15","15","15",
      "10","10","10",
      "5","5","5","5","5","5"];
    var i;
    for (i = 0; i < 17; i++) {
        this.w1.push("");
        this.w2[i] = this.p2[i];
    }

    this.ctx2 = this.canvasRef2.nativeElement.getContext('2d');
  }

  paint2() {
    let x = this.x2;
    let y = this.y2;
    let ctx = this.ctx2;
    
    ctx.beginPath(); 
    ctx.clearRect(x,y,530,400);
    ctx.rect(x,y,240,240);
    ctx.rect(x,y,120,120);
    ctx.rect(x+120,y+120,120,120);
    ctx.moveTo(x,y)
    ctx.lineTo(x+240,y+240);
    ctx.moveTo(x+240,y);
    ctx.lineTo(x,y+240);
    
    ctx.rect(x-15,y-15,30,30);
    ctx.rect(x+105,y-15,30,30);
    ctx.rect(x+225,y-15,30,30);
    ctx.rect(x+45,y+45,30,30);
    ctx.rect(x+105,y+45,30,30);
    ctx.rect(x+165,y+45,30,30);

    ctx.rect(x-15,y+105,30,30);
    ctx.rect(x+45,y+105,30,30);
    ctx.rect(x+105,y+105,30,30);
    ctx.rect(x+165,y+105,30,30);
    ctx.rect(x+225,y+105,30,30);

    ctx.rect(x+45,y+165,30,30);
    ctx.rect(x+105,y+165,30,30);
    ctx.rect(x+165,y+165,30,30);
    ctx.rect(x-15,y+225,30,30);
    ctx.rect(x+105,y+225,30,30);
    ctx.rect(x+225,y+225,30,30);
    ctx.stroke();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.clearRect(x-14,y-14,29,29);
    ctx.clearRect(x+106,y-14,29,29);
    ctx.clearRect(x+226,y-14,29,29);
    ctx.clearRect(x+46,y+46,29,29);
    ctx.clearRect(x+106,y+46,29,29);
    ctx.clearRect(x+166,y+46,29,29);

    ctx.clearRect(x-14,y+106,29,29);
    ctx.clearRect(x+46,y+106,29,29);
    ctx.clearRect(x+106,y+106,29,29);
    ctx.clearRect(x+166,y+106,29,29);
    ctx.clearRect(x+226,y+106,29,29);

    ctx.clearRect(x+46,y+166,29,29);
    ctx.clearRect(x+106,y+166,29,29);
    ctx.clearRect(x+166,y+166,29,29);
    ctx.clearRect(x-14,y+226,29,29);
    ctx.clearRect(x+106,y+226,29,29);
    ctx.clearRect(x+226,y+226,29,29);
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = "blue";
    ctx.font = "22px TimesRoman";
    var i;
    for (i = 0; i < 17; i++) {
       ctx.fillText(this.w1[i],this.t1[i],this.u1[i]);
    }
    for (i = 0; i < 17; i++) {
      ctx.fillText(this.w2[i],this.t2[i],this.u2[i]);
    }
  }

  mousedown2(e: MouseEvent) {
    var x = e.offsetX;
    var y = e.offsetY;
    var i;
    for (i = 0; i < 17; i++) {   // sprawdzenie polozenia myszki
      if (this.t2[i] < x && x < this.t2[i]+22 &&
         this.u2[i]-18 < y && y < this.u2[i]) {
         if (this.w2[i] != "") {
            this.licz = i;           // zapamietanie wybranej pozycji
            //setCursor(cmove);                 // z prawej strony
            document.getElementById("can2").style.cursor = "move";
         }
         break;
      }
   }
  }

  mouseup2(e: MouseEvent) {
    if (this.licz < 100) {   // sprawdzenie czy wybrano liczbe
      var x = e.offsetX;
      var y = e.offsetY;
      var i;
      for (i = 0; i < 17; i++) {
         if (this.t1[i]-5 < x && x < this.t1[i]+25 &&
            this.u1[i]-25 < y && y < this.u1[i]+5) {
            if (this.w1[i] == "") {
               this.w1[i] = this.w2[this.licz];   // przeniesienie liczby na lewo
               this.w2[this.licz] = "";
            }
            break;
         }
      }
      this.licz = 100;
      document.getElementById("can2").style.cursor = "default";
      this.paint2();
    } 
  }

  mousemove2(e: MouseEvent) {
    this.def = true;
    var x = e.offsetX;
    var y = e.offsetY;
    var i;
    for (i = 0; i < 17; i++) {
        if (this.t2[i] < x && x < this.t2[i]+22 &&
           this.u2[i]-18 < y && y < this.u2[i]) {
           if (this.w2[i] != "") {
             document.getElementById("can2").style.cursor = "grab"; // zmiana kursora po najechaniu 
             this.def = false;                                      // na liczbe z prawej strony
           }
           break;
        }
     }
     if (this.def == true) {
       if (this.licz != 100)
         document.getElementById("can2").style.cursor = "move";
       else
        document.getElementById("can2").style.cursor = "default"; // zmiana kursora na domyslny
     }
  }

  check2() {
    let s = this.s;
    var i;
    for (i = 0; i < 17; i++) {
      if (this.w1[i] != "")
         s[i] = parseInt(this.w1[i],10);
      else
         s[i] = 0;
   }
   if (s[0] + s[1] + s[2] == 55 &&
       s[0] + s[6] + s[14] == 55 &&
       s[2] + s[10] + s[16] == 55 &&
       s[14] + s[15] + s[16] == 55 &&
       s[6] + s[7] + s[8] + s[9] + s[10] == 55 &&
       s[1] + s[4] + s[8] + s[12] + s[15] == 55 &&
       s[0] + s[3] + s[8] + s[13] + s[16] == 55 &&
       s[2] + s[5] + s[8] + s[11] + s[14] == 55)
     alert(this.messageGood);
   else
     alert(this.messageBad);
  }

  clear2() {
    var i;
    for (i = 0; i < 17; i++) {
        this.w1[i] = "";
        this.w2[i] = this.p2[i];
    }
    var i;
    this.paint2();
  }

  solve2() {
    var i;
    for (i = 0; i < 17; i++) {
      this.w1[i] = this.p1[i];    // podstawienie rozwiazania
      this.w2[i] = "";
    }
    this.paint2();
  }

  //--------------------
  init3() {
    let x = this.x1;
    let y = this.y1;
    let k = this.k3;
    this.t3 = [x+12,x+42,     x+102,x+132,x+162,x+192,x+215,
      x+12,x+42,     x+102,x+132,x+162,x+192,x+222,
      x+12,x+42,x+72,x+102,x+132,x+162,x+192,x+222,
      x+12,x+42,x+72,      x+132,x+162,x+192,x+222,
      x+12,x+42,x+72,      x+132,x+162,x+192,x+222,
      x+12,x+42,x+72,x+102,x+132,x+162,x+192,x+222,
      x+12,x+42,x+72,x+102,      x+162,x+192,x+222,
      x+12,x+42,x+72,x+102,      x+162,x+192,x+222];
    this.u3 = [y+18,y+18,y+18,y+18,y+18,y+18,y+30,
      y+48,y+48,y+48,y+48,y+48,y+48,y+48,
      y+78,y+78,y+78,y+78,y+78,y+78,y+78,y+78,
      y+108,y+108,y+108,y+108,y+108,y+108,y+108,
      y+138,y+138,y+138,y+138,y+138,y+138,y+138,
      y+168,y+168,y+168,y+168,y+168,y+168,y+168,y+168,
      y+198,y+198,y+198,y+198,y+198,y+198,y+198,
      y+228,y+228,y+228,y+228,y+228,y+228,y+228];
    var i;
    for (i = 0; i < 58; i++) {
        this.k3.push("");
    }
    k[0]=k[3]=k[5]=k[8]=k[9]=k[11]=k[13]=k[14]=
    k[16]=k[18]=k[20]=k[23]=k[26]=k[28]=k[29]=k[31]=
    k[32]=k[34]=k[37]=k[39]=k[41]=k[43]=k[44]=k[46]=
    k[49]=k[52]=k[54]=k[55]=k[57] = ".";
    k[6] = "*";
    this.p3[0] = {x: x+222, y: y+18};   //punkt poczatkowy - gwiazdka

    this.ctx3 = this.canvasRef3.nativeElement.getContext('2d');
  }

  paint3() {
    let x = this.x1;
    let y = this.y1;
    let ctx = this.ctx3;

    ctx.beginPath();
    //ctx.clearRect(x,y,250,250);
    ctx.clearRect(x-30,y-40,590,350);
    ctx.rect(x,y,240,240);
    ctx.rect(x+30,y,30,240);
    ctx.rect(x+90,y,30,240);
    ctx.rect(x+150,y,30,240);
    ctx.rect(x+210,y,30,240);

    ctx.rect(x,y+30,240,30);
    ctx.rect(x,y+90,240,30);
    ctx.rect(x,y+150,240,30);
    ctx.rect(x,y+210,240,30);
    ctx.stroke();

    ctx.fillStyle = "lightgrey";
    ctx.fillRect(x+61,y+1,29,29);
    ctx.fillRect(x+61,y+31,29,29);
    ctx.fillRect(x+91,y+91,29,29);
    ctx.fillRect(x+91,y+121,29,29);
    ctx.fillRect(x+121,y+181,29,29);
    ctx.fillRect(x+121,y+211,29,29);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.font = "30px TimesRoman";
    var i;
    for (i = 0; i < 58; i++) {
       ctx.fillText(this.k3[i],this.t3[i],this.u3[i]);
    }
    
    ctx.strokeStyle = "red";
    var i;
    for (i = 0; i < this.ilp; i++) {   //zapamietane linie
      ctx.moveTo(this.p3[i].x,this.p3[i].y);
      ctx.lineTo(this.p3[i+1].x,this.p3[i+1].y);  
    }
    ctx.stroke();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "black";
    if (this.end != null) {
      ctx.moveTo(this.start.x,this.start.y);
      ctx.lineTo(this.end.x,this.end.y);    //aktualna linia
    }
    ctx.stroke();
    ctx.closePath();
  }

  mousedown3(e: MouseEvent) {
    var x = e.offsetX;
    var y = e.offsetY;
    var i;
    if (this.ilp < 57) {
      if (this.p3[this.ilp].x-10 < x && x < this.p3[this.ilp].x+15 &&
          this.p3[this.ilp].y-15 < y && y < this.p3[this.ilp].y+10) {
          this.start = {x: this.p3[this.ilp].x, y: this.p3[this.ilp].y};   //poczatek linii
      }
    }
  }

  mouseup3(e: MouseEvent) {
    if (this.ilp < 57 && this.start != null) {
      var x = e.offsetX;
      var y = e.offsetY;
      var i;
      for (i = 0; i < 58; i++) {
         if (this.t3[i]-10 < x && x < this.t3[i]+15 &&
            this.u3[i]-15 < y && y < this.u3[i]+10) {
            // sprawdzenie czy x lub y takie samo (nie po skosie)
            if ((this.t3[i] != this.p3[this.ilp].x && this.u3[i] == this.p3[this.ilp].y) ||
                (this.t3[i] == this.p3[this.ilp].x && this.u3[i] != this.p3[this.ilp].y)) {
               this.good3 = true;
               // sprawdzenie czy byl juz zapamietany taki punkt
               var j;
               for (j = 0; j < this.ilp; j++) {
                  if (this.t3[i] == this.p3[j].x && this.u3[i] == this.p3[j].y) {
                     this.good3 = false;
                     break;
                  }
               }
               if (this.good3 == true) {
                  this.ilp++;
                  this.p3[this.ilp] = {x: this.t3[i], y: this.u3[i]};  // kolejny punkt
               }
            }
            break;
         }
      }
    }
    this.start = null;    // koniec rysowania aktualnej linii
    this.end = null;
    this.paint3();
  }

  mousemove3(e: MouseEvent) {
    var i;
    if (this.ilp < 57 && this.start != null) {
      this.end = {x: e.offsetX, y: e.offsetY};   //koniec aktualnej linii
      this.paint3();
   }  
  }

  clear3() {
    var i;
    for (i = 1; i < 58; i++) {
      this.p3[i] = null;    // usuniecie punktow (oprocz poczatkowego)
      this.ilp = 0;
    }
    this.paint3();
  }
  
  solve3() {
    let p = this.p3;
    var i;
    for (i = 1; i < 48; i++) {
      p[i] = null;
    }
    this.ilp = 22;    // punkty prawidlowego rozwiazania
    p[1] = {x: this.t3[2], y: this.u3[2]};
    p[2] = {x: this.t3[9], y: this.u3[9]};
    p[3] = {x: this.t3[13], y: this.u3[13]};
    p[4] = {x: this.t3[21], y: this.u3[21]};
    p[5] = {x: this.t3[15], y: this.u3[15]};
    p[6] = {x: this.t3[1], y: this.u3[1]};
    p[7] = {x: this.t3[0], y: this.u3[0]};
    p[8] = {x: this.t3[51], y: this.u3[51]};
    p[9] = {x: this.t3[52], y: this.u3[52]};
    p[10] = {x: this.t3[23], y: this.u3[23]};
    p[11] = {x: this.t3[24], y: this.u3[24]};
    p[12] = {x: this.t3[53], y: this.u3[53]};
    p[13] = {x: this.t3[54], y: this.u3[54]};
    p[14] = {x: this.t3[39], y: this.u3[39]};
    p[15] = {x: this.t3[40], y: this.u3[40]};
    p[16] = {x: this.t3[25], y: this.u3[25]};
    p[17] = {x: this.t3[26], y: this.u3[26]};
    p[18] = {x: this.t3[55], y: this.u3[55]};
    p[19] = {x: this.t3[56], y: this.u3[56]};
    p[20] = {x: this.t3[27], y: this.u3[27]};
    p[21] = {x: this.t3[28], y: this.u3[28]};
    p[22] = {x: this.t3[57], y: this.u3[57]};
    this.paint3();
  }
  
}

interface Point {
  readonly x: number;
  readonly y: number;
}