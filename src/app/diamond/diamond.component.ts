import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.css']
})
export class DiamondComponent implements OnInit {

  constructor() { }
  printDiamond(sym:string):void {
    var space = 3;
    for (var i= 1; i <= 3; i++) {
      for (var j = 1; j <= space; j++) {
        document.getElementById("result").insertAdjacentHTML('beforeend', '&nbsp;&nbsp;');
      }
      space--;
      for (j = 1; j <= 2 * i - 1; j++) {
       document.getElementById("result").insertAdjacentHTML('beforeend', sym);
      }
      document.getElementById("result").insertAdjacentHTML('beforeend', '<br>');
    }
 
    space = 2;
    for (i = 1; i <= 3; i++) {
      for (j = 1; j <= space; j++) {
        document.getElementById("result").insertAdjacentHTML('beforeend', '&nbsp;&nbsp;');
      }
      space++;
      for (j = 1; j <= 2 * (3 - i) - 1; j++) {
        document.getElementById("result").insertAdjacentHTML('beforeend', sym);
      }
      document.getElementById("result").insertAdjacentHTML('beforeend', '<br>');
    }
                
  }
  ngOnInit() {
  }

}
