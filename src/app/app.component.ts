import { Component } from '@angular/core';
import { Animal } from './models/animal';
import { ApiConnectService } from './services/api-connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  actionMessage: string = "";
  toastVisible: boolean = false;
  selectedAnimal: Animal = {
    _id: "",
    name: "",
    age: 1,
    color: "",
    type: ""
  };
  clearAnimal: Animal = this.selectedAnimal;
  animals: any[] = [];

  constructor(private connect: ApiConnectService){}

  ngOnInit(){
    this.connect.getAnimals()
      .subscribe(response => {
        this.connect.selectedAnimal = response as Animal;
        this.animals = this.animals.concat(this.connect.selectedAnimal);
      })
  }

  selectPet(data: any){ this.selectedAnimal = data }

  getPet(data: any){
    const index = this.animals.findIndex((animal) => animal._id === data.pet._id);
    (index >= 0) ? this.animals[index] = data.pet : this.animals.push(data.pet);
    this.clearData();
    this.showToast(data.status);
  }

  deletePet(data: any){
    const index = this.animals.findIndex((animal) => animal._id === data.id);
    this.animals.splice(index, 1);
    this.showToast(data.response.status);
  }

  clearData(){ this.selectedAnimal = this.clearAnimal }

  showToast(message: string){
    this.actionMessage = message;
    this.toastVisible = true;
    setTimeout(()=>{
      this.toastVisible = false;
    }, 2500);
  }
}
