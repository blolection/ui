import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BallotServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BallotServiceProvider {

  constructor(public http: Http) {
    console.log('Hello BallotServiceProvider Provider');
  }

  getBallot(){
    return new Promise((resolve,reject)=>{
      this.http.get('http://192.168.43.25:4567/api/getotp')
        .map(res => res.json())
        .subscribe(res =>{
          resolve(res);
        },(err)=>{
          reject(err);
        })
    })

  }

}
