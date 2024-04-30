import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registarform',
  templateUrl: './registarform.component.html',
  styleUrl: './registarform.component.css'
})
export class RegistarformComponent {

  postUserForm!: FormGroup;

  constructor(private userService:UserService, private fb:FormBuilder){}

  ngOnInit(){
    this.postUserForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      role: [null, [Validators.required]]
    })
  }

  postUser(){
    console.log(this.postUserForm.value);
    this.userService.postUser(this.postUserForm.value).subscribe((res)=>{
      console.log(res);
    })
  }
}
