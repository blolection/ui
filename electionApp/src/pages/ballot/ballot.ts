import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-ballot',
  templateUrl: 'ballot.html'
})
export class BallotPage {

  candidates:any;
  constructor(public navCtrl: NavController) {
    this.candidates=[{name:"Vasundhara Raje", vote:false, img:"http://vasundhararaje.in/wp-content/uploads/2015/03/hp-exemplary-life-profile-pic.png"},{name:"Vasundhara Raje", vote:false, img:"http://vasundhararaje.in/wp-content/uploads/2015/03/hp-exemplary-life-profile-pic.png"}];
  }
  
  vote(name,vote){

    console.log(`${name} got the vote: ${vote}`);

  }
}
