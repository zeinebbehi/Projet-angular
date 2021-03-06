import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm : FormGroup

  constructor(fb : FormBuilder) { 
    let registerControls = {

      username : new FormControl("", [Validators.required]) , 
      email : new FormControl("", [Validators.required]) , 
      password : new FormControl("", [Validators.required]) ,
      repassword : new FormControl("", [Validators.required]) , 
    }
    this.registerForm = fb.group(registerControls)
  }

  ngOnInit(): void {
  }

  public registerUser() : void {
    console.log(this.registerForm.value) ;
  }


}
