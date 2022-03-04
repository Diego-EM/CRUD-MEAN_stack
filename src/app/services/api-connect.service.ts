import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../models/animal';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {

  selectedAnimal = new Animal();
  API_url: string = 'http://localhost:3000/api/animals';

  constructor(private http: HttpClient) { }

  getAnimals(){
    return this.http.get(this.API_url);
  }

  getAnimal(_id: string){
    return this.http.get(`${this.API_url}/${_id}`);
  }

  addAnimal(animal: Animal){
    return this.http.post(this.API_url,animal);
  }

  updateAnimal(animal: Animal, id?: string){
    return this.http.put(`${this.API_url}/${(id)? id : animal._id}`,animal);
  }

  deleteAnimal(_id: String){
    return this.http.delete(`${this.API_url}/${_id}`);
  }
}