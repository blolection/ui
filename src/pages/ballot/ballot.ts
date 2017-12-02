import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {VotePage} from '../vote/vote';
import {BallotServiceProvider} from '../../providers/ballot-service/ballot-service'
@Component({
  selector: 'page-ballot',
  templateUrl: 'ballot.html',
  providers:[BallotServiceProvider]
})
export class BallotPage {

  user:any;
  candidates:any;
  response:any;
  constructor(public navCtrl: NavController, private storage: Storage,public ballot:BallotServiceProvider) {

    this.candidates={};
    // this.candidates=[
    // {name:"Vasundhara Raje",  img:"http://vasundhararaje.in/wp-content/uploads/2016/06/vasundhara-raje-vidyanjali-homepage.jpg",symbol:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Lotos_flower_symbol.svg/150px-Lotos_flower_symbol.svg.png",description:"Blah, blah, Blah"},
    // {name:"Bhanu",img:"https://timesofindia.indiatimes.com/photo/msid-58915663/58915663.jpg?143864",description:"Tata tata tata"},
    // {name:"Manohar Lal", img:"",description:"Ola Gama beta tata"}];
    
    storage.ready().then(() => {
      storage.get('user').then(user => {
        this.user = JSON.parse(user);
        console.log("This is user data");
        console.log(this.user);

      }).catch(console.log);
    });


}

getBallot(){
  this.response={};
  this.ballot.getBallot().then

  this.ballot.getBallot().then((res) =>{
    this.response=res;
    console.log("This is response",this.response)
    this.candidates=this.response
  });  

}

vote(candidate){
  
      console.log(`${candidate.name} got the vote`);
      
      this.user.vote=candidate.name;
      
      this.storage.set('user',JSON.stringify(this.user));
      
      this.storage.ready().then(() => {
        this.storage.get('user').then(user => {
          this.user = JSON.parse(user);
          console.log("This is user data");
          console.log(this.user);
          
          this.navCtrl.push(VotePage);
          
        }).catch(console.log);
      });

      
    }
}
