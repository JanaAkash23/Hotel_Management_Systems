import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-update-user-table',
  templateUrl: './update-user-table.component.html',
  styleUrl: './update-user-table.component.css'
})
export class UpdateUserTableComponent {
  upDateUserForm!: FormGroup;
  id: number = this.activateRoute.snapshot.params['id'];
  constructor(private activateRoute: ActivatedRoute, private userservice: UserService, private fb:FormBuilder,
    private router:Router
  ){}

  ngOnit(){

    this.upDateUserForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      role: [null, [Validators.required]]
    })
    this.getUserByid();
  }

  getUserByid(){
    this.userservice.getUserById(this.id).subscribe((res)=>{
      console.log(res);
      this.upDateUserForm.patchValue(res);
    })
  }

  updateuser(){
    this.userservice.updateUser(this.id, this.upDateUserForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.router.navigateByUrl("UserTableComponent");
      }
    })
  }

}
