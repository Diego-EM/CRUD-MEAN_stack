import { Component,OnInit ,Input ,Output ,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Animal } from 'src/app/models/animal';
import { ApiConnectService } from 'src/app/services/api-connect.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ ApiConnectService ]
})
export class FormComponent implements OnInit {

  @Input() id: string|undefined;
  @Input() name: string|undefined;
  @Input() color: string|undefined;
  @Input() age: number|undefined;
  @Input() type: string|undefined;
  @Output() ApiResponse: EventEmitter<any> = new EventEmitter();
  @Output() CancelUpdate: EventEmitter<any> = new EventEmitter();
  petForm!: FormGroup;

  constructor(public connect: ApiConnectService) { }

  ngOnInit(): void {
    this.petForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(35), Validators.pattern(/^(\w+\s?){1,35}$/i)]),
      color: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(6), Validators.pattern(/^\w{1,10}$/i)]),
      age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(20)]),
      type: new FormControl('', [Validators.required, Validators.pattern(/(dog|cat)/i)]),
    })
  }

  ngOnChanges(){
    if (this.petForm){
      this.petForm.setValue({
        "name":this.name,
        "age":this.age,
        "color":this.color,
        "type":this.type
      })
    }
  }

  savePet(){
    if (this.id){
      this.connect.updateAnimal(this.petForm.value, this.id)
        .subscribe((response) => {
          this.ApiResponse.emit(response);
        });
    } else {
      this.connect.addAnimal(this.petForm.value)
        .subscribe((response) => {
          this.ApiResponse.emit(response);
        });
    }
    this.clearForm();
  }

  cancelUpdate(){
    this.clearForm();
    this.CancelUpdate.emit();
  }

  clearForm(){
    this.id = undefined;
    this.petForm.reset()
  }
}
