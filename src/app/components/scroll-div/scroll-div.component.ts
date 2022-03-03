import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from 'src/app/services/api-connect.service';

@Component({
  selector: 'app-scroll-div',
  templateUrl: './scroll-div.component.html',
  styleUrls: ['./scroll-div.component.css']
})
export class ScrollDivComponent implements OnInit {

  constructor(private connect: ApiConnectService) { }

  ngOnInit(): void {
  }

  getAnimals(): void {
    console.log("Funciona");
    this.connect.getAnimals().subscribe(data => console.log(data));
  }

}
