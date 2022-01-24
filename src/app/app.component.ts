import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  email="radhikaj2411@gmail.com"
  pass ="Indore@123"
  loginForm = new FormGroup({
    uname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    eMail : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$')]),
    mobile : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    cpassword: new FormControl('',[Validators.required])
  })
  loginUser(data:any){
    console.log(this.loginForm.value);
    if (this.loginForm.value.eMail==this.email && this.loginForm.value.password==this.pass){
    alert("Login Successfully")
    }
  }
  get eMail(){
    return(this.loginForm.get('eMail'))
  }
  get password(){

    return(this.loginForm.get('password'))
  }
  get uname(){

    return(this.loginForm.get('uname'))
  }
  get mobile(){
    return(this.loginForm.get('mobile'))
  }

}
