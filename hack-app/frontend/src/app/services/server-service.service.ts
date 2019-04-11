import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerServiceService {

  constructor(private http:HttpClient) { 
  }

  sendRequest(){
    this.http.post('http://localhost:4000/','I love it').subscribe(response => console.log(response));
  }
}
