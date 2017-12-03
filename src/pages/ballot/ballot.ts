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
  payload:any;
  constructor(public navCtrl: NavController, private storage: Storage,public ballot:BallotServiceProvider) {
    this.payload={};
    this.candidates=[];
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

    this.getBallot();

}

getBallot(){
  this.response={};
  console.log('Getting balot')
  this.ballot.getBallot().then((res) =>{
    console.log(res)
    this.response=res;
    console.log("This is response",this.response.candidates)
    this.candidates=JSON.parse(this.response.candidates);
  });  

}

vote(candidate){
  this.response={};
  
      console.log(`${candidate.name} got the vote`);
      
      this.user.uid=candidate.uid;
      this.user.phone=Number(this.user.phone);
      this.user.uid=Number(this.user.uid);

      this.payload.number=this.user.phone;
      this.payload.uid=this.user.uid;
      this.payload.token=this.user.token;
      this.storage.set('user',JSON.stringify(this.user));

      this.ballot.vote(this.payload).then((res)=>{
        this.response=res;
      
        if(this.response.status){
          this.navCtrl.push(VotePage);          
        }
        
        
        
      })
      

      
    }
}
