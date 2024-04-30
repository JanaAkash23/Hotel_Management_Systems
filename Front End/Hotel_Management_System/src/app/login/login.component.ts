import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isInnvalid:boolean=false;
  invalidMsg:any;
  postuserLoginForm!: FormGroup;
  constructor(private userService:UserService, private fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.fullHeight();
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


  fullHeight(): void {
    const elements = document.querySelectorAll('.js-fullheight');
    elements.forEach(element => {
      (element as HTMLElement).style.height = window.innerHeight + 'px';
    });

    window.addEventListener('resize', () => {
      elements.forEach(element => {
        (element as HTMLElement).style.height = window.innerHeight + 'px';
      });
    });
  }

  togglePassword(event: MouseEvent, inputId: string): void {
    const target = event.target as HTMLElement;
    target.classList.toggle('fa-eye');
    target.classList.toggle('fa-eye-slash');

    const input = document.getElementById(inputId) as HTMLInputElement;
    input.type = input.type === 'password' ? 'text' : 'password';
  }

}
