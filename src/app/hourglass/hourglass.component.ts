import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourglass',
  templateUrl: './hourglass.component.html',
  styleUrls: ['./hourglass.component.css']
})
export class HourglassComponent implements OnInit {

  constructor() { }
  printDiamond(sym:string):void {
    var n:number=3;
    for (var i= 1; i <= 3; i++) {
      for (var s = 1; s <= i; s++) {
        document.getElementById("result").insertAdjacentHTML('beforeend', '&nbsp;&nbsp;');
      }
      for (var j = 1; j <= n; j++) {
       document.getElementById("result").insertAdjacentHTML('beforeend', sym);
      }
      for (j = 3-i; j >= 1; j--) {
        document.getElementById("result").insertAdjacentHTML('beforeend', sym);
       }
       n--;
      document.getElementById("result").insertAdjacentHTML('beforeend', '<br>');
    }

    for (i = 2; i <= 3; i++) {
      for (s = 4-i; s >= 1; s--) {
        document.getElementById("result").insertAdjacentHTML('beforeend', '&nbsp;&nbsp;');
      }
      for (j = 1; j <= i; j++) {
        document.getElementById("result").insertAdjacentHTML('beforeend', sym);
      }
      for (j = i-1; j >= 1; j--) {
        document.getElementById("result").insertAdjacentHTML('beforeend', sym);
      }
      document.getElementById("result").insertAdjacentHTML('beforeend', '<br>');
    }
                
  }
  ngOnInit() {
  }

}
