import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BallotPage} from '../ballot/ballot'

import { Storage } from '@ionic/storage';

import {AuthServiceProvider} from '../../providers/auth-service/auth-service'

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [AuthServiceProvider]
})
export class SignupPage {

  phone: any;
  otp: any;
  otpNow: boolean;
  response:any;
  otpAttempt:Number
  constructor(public navCtrl: NavController, private storage: Storage, public auth:AuthServiceProvider) {
    this.otpNow = false;
    this.otpAttempt=0;
  }
  
  GetOTP(){
    this.response={};
    
    if(  (Number(this.phone)/1000000000>=1)){

      if(this.otpAttempt==0){
        this.auth.getOTP(Number(this.phone)).then((res) =>{
          this.response=res;
          console.log("This is response",this.response)
          if(this.response.status){
            this.otpNow=true;
            this.otpAttempt=1;          
          }
        });  
      }


      // this.usersService.getUsers().then((res)=>{
      //   this.userList=res;
      //   console.log(res)
      // }, (err)=>{
      //   console.log(err);
      // });
  
      
    }else{
      console.log("incorrect number")
    }
  }

  SubmitOTP(){
    this.response={};
    if(Number(this.otp)/10000>=1){

      this.auth.getToken(this.phone,this.otp).then((res)=>{
        this.response=res;
        console.log("This is response",this.response)
        
        if(this.response.status){
          this.storage.set('user',JSON.stringify({phone:this.phone,token:this.response.token,vote:''})); 
          this.navCtrl.push(BallotPage)
          
        }
      });

      
    }

  }
  

}
