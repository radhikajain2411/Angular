import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }
  loginform = new FormGroup(
    {
      email : new FormControl(' '),
      password : new FormControl(' ')
    }
  )
  submit(data:any){
    alert("login")
  }

}
