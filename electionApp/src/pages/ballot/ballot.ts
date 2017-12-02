import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-ballot',
  templateUrl: 'ballot.html'
})
export class BallotPage {

  candidates:any;
  constructor(public navCtrl: NavController) {
    this.candidates=[{name:"Vasundhara Raje", vote:false, img:"http://vasundhararaje.in/wp-content/uploads/2016/06/vasundhara-raje-vidyanjali-homepage.jpg"},{name:"Bhanu",vote: false,img:"https://timesofindia.indiatimes.com/photo/msid-58915663/58915663.jpg?143864"}];
  }
  
  vote(name,vote){

    console.log(`${name} got the vote: ${vote}`);

  }
}
