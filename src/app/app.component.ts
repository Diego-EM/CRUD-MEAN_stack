import { Component } from '@angular/core';
import { Animal } from './models/animal';
import { ApiConnectService } from './services/api-connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedAnimal: Animal ={
    _id: "",
    name: "",
    age: 0,
    color: "",
    type: ""
  };
  animals: any[] = [];

  constructor(private connect: ApiConnectService){}

  ngOnInit(){
    this.connect.getAnimals()
      .subscribe(response => {
        this.connect.selectedAnimal = response as Animal;
        this.animals = this.animals.concat(this.connect.selectedAnimal);
      })
  }

  selectPet(data: any){this.selectedAnimal = data }

  getPet(data: any){
    const index = this.animals.findIndex((animal) => animal._id === data.pet._id);
    (index >= 0) ? this.animals[index] = data.pet : this.animals.push(data.pet);
  }

  deletePet(data: any){
    const index = this.animals.findIndex((animal) => animal._id === data.id);
    this.animals.splice(index, 1);
  }
}
