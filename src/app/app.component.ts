import { Component } from '@angular/core';
import { Animal } from './models/animal';
import { ApiConnectService } from './services/api-connect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  animals: any[] = [];

  constructor(private connect: ApiConnectService){}

  ngOnInit(){
    this.connect.getAnimals()
      .subscribe(response => {
        this.connect.selectedAnimal = response as Animal;
        this.animals = this.animals.concat(this.connect.selectedAnimal);
      })
  }
}
