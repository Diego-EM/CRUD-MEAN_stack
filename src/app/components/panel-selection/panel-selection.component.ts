import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-selection',
  templateUrl: './panel-selection.component.html',
  styleUrls: ['./panel-selection.component.css']
})
export class PanelSelectionComponent implements OnInit {

  @Input() id: string = "";
  @Input() name: string = "";
  @Input() color: string = "";
  @Input() age: number = 0;
  @Input() type: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  editAnimal(){
    console.log('Pet edited')
  }

  deleteAnimal(){
    console.log('Pet deleted')
  }

}
