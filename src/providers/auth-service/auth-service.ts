import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(private http: Http) {
    console.log('Hello AuthServiceProvider Provider');

   
  }
  getOTP(phone:Number){
    return new Promise((resolve,reject)=>{
      this.http.post('http://139.59.28.1:4567/api/getotp',{number:phone})
        .map(res => res.json())
        .subscribe(res =>{
          resolve(res);
        },(err)=>{
          reject(err);
        })
    })

  }

  getToken(phone,otp){
    return new Promise((resolve,reject)=>{
      this.http.post('http://139.59.28.1:4567/api/verifyotp',{number:phone,otp:otp})
        .map(res => res.json())
        .subscribe(res =>{
          resolve(res);
        },(err)=>{
          reject(err);
        })
    })

  }
}
