import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  isInnvalid:boolean=false;
  invalidMsg:any;
  postuserLoginForm!: FormGroup;
  constructor(private userService:UserService, private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {

    this.postuserLoginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],

    })
  }

  postuserLogin(){
    const ld = this.postuserLoginForm.value;
    this.userService.login(ld).subscribe({
      next:(response: { body: string; })=>{console.log(response.body);
        window.sessionStorage.setItem('loggedIn', 'true');
        window.sessionStorage.setItem('doID',response.body);

        this.router.navigate(['/post',"All"])
        window.location.href = '/post/All';


      },
      error:(error:HttpErrorResponse)=>{console.log(error.error);
        this.invalidMsg = error.error;
        this.isInnvalid = true;
      }


  })

  }

}
