import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  postUser(user: any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'crossOrigin': 'true'
    });
    return this.http.post(`http://localhost:8080/hotel/user`, user,
    {
      headers


    }
    );
  }



  login(userlogin:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'crossOrigin': 'true'
    });
    return this.http.post(`http://localhost:8080/login`, userlogin,
    {
      headers


    }
    );
   }


   getAllUsers(): Observable<any[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'crossOrigin': 'true'
    });
    return this.http.get<any[]>(`http://localhost:8080/hotel/getAllData`,{headers});
   }



   getUserById(id: number): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'crossOrigin': 'true'
    });
    return this.http.get<any>(`http://localhost:8080/hotel/user/${id}`,{headers});
   }

   updateUser(id: number, user: any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'crossOrigin': 'true'
    });
    return this.http.put(`http://localhost:8080/hotel/user/update/${id}`,user,
    {headers});
   }

   deleteUser(id: number): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'crossOrigin': 'true'
    });
    return this.http.delete(`http://localhost:8080/user/${id}`,{headers});
   }
}
