import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms'
import { Animal } from 'src/app/models/animal';
import { ApiConnectService } from 'src/app/services/api-connect.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ ApiConnectService ]
})
export class FormComponent implements OnInit {

  constructor(private render: Renderer2, public connect: ApiConnectService) { }

  ngOnInit(): void {
    
  }

  submitData(e: Event, form: any){
  }

  savePet(form: NgForm){
    console.log(form.value)
    // this.connect.addAnimal(form.value)
    //   .subscribe(response => console.log(response));
    // this.resetForm(form);
  }

  resetForm(form: NgForm){
    form.resetForm();
    this.connect.selectedAnimal = new Animal();
  }





  // submitData(e: Event){
  //   e.preventDefault();
  //   let animal: any = {};
  //   let promises: any[] = []
  //   const regex = /^(\w+\s?){1,25}/i;
  //   const petForm = this.petForm.nativeElement;
  //   const formData = new FormData(petForm);
    
  //   formData.forEach((value, key) => {
  //     promises.push(this.validateData(value, regex, 'Must type valid characters'));
  //     animal[key] = value;
  //   })

  //   const json = JSON.stringify(animal);
  //   Promise.all(promises).then(data => console.log(data))
  //     .catch(e => console.log("Unvalid data"))
  //   // this.connect.addAnimal(animal).subscribe(response => console.log(response));
  // }

  // validateData(value: any, validation: RegExp, reject: string){
  //   return new Promise((resolve, reject)=>{  
  //       if(value.match(validation)) resolve('Valid data');
  //       reject(reject);
  //   })
  // }
}
