import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  users: any[]=[];
$user: any;

  constructor(private userservice: UserService){}

  ngOnInit(){
    this.getAllUser();
  }

  getAllUser(){
    this.userservice.getAllUsers().subscribe((res) =>{
      console.log(res);
      this.users = res;
    })
  }


  deleteuser(id: number){
    this.userservice.deleteUser(id).subscribe((res)=>{
      console.log(res);
      this.getAllUser();
    })
  }

}
