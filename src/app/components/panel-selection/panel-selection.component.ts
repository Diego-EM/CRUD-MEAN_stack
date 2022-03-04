import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiConnectService } from 'src/app/services/api-connect.service';

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
  @Output() ApiResponse: EventEmitter<any> = new EventEmitter();
  @Output() PetUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private connect: ApiConnectService) { }

  ngOnInit(): void {
  }

  editAnimal(){
    const pet = {
      _id: this.id,
      name: this.name,
      color: this.color,
      age: this.age,
      type: this.type
    }
    this.PetUpdate.emit(pet);
  }

  deleteAnimal(){
    this.connect.deleteAnimal(this.id)
      .subscribe(response => this.ApiResponse.emit({id: this.id, response: response}));
  }

}
