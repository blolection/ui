import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-ballot',
  templateUrl: 'ballot.html'
})
export class BallotPage {

  candidates:any;
  constructor(public navCtrl: NavController) {
    this.candidates=[
    {name:"Vasundhara Raje",  img:"http://vasundhararaje.in/wp-content/uploads/2016/06/vasundhara-raje-vidyanjali-homepage.jpg",symbol:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Lotos_flower_symbol.svg/150px-Lotos_flower_symbol.svg.png",description:"Blah, blah, Blah"},
    {name:"Bhanu",img:"https://timesofindia.indiatimes.com/photo/msid-58915663/58915663.jpg?143864",description:"Tata tata tata"},
    {name:"Manohar Lal", img:"",description:"Ola Gama beta tata"}];
  }
  
  vote(name){

    console.log(`${name} got the vote`);
    

  }
}
