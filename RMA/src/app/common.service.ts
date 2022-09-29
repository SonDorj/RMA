import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
resto="http://localhost:3000/restaurant";
user="http://localhost:3000/users";
  constructor(private _http:HttpClient) { }
  signup(data:any){
    return this._http.post(this.user,data);
  }
  getUser(){
    return this._http.get<any>(this.user);
  }
}
