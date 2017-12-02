import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BallotPage} from '../ballot/ballot'

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  phone: any
  otp: any
  otpNow: boolean
  constructor(public navCtrl: NavController, private storage: Storage) {
    this.otpNow = false;

  }
  
  GetOTP(){
    if(Number(this.phone)){
      this.otpNow=true;
      
    }else{
      console.log("incorrect number")
    }
  }

  SubmitOTP(){
    if(Number(this.otp)){
      this.navCtrl.push(BallotPage)
    }

    this.storage.set('user',JSON.stringify({phone:this.phone,token:'asasdasddasd',vote:''}));
  }
  

}
