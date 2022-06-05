import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  lista : string[] = ['ciao.mp3','2.mp3'];
  constructor() {
    
   }

  ngOnInit(): void {

  }

}
