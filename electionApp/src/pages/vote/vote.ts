import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the VotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vote',
  templateUrl: 'vote.html',
})
export class VotePage {
  user:any;
  vote: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    storage.get('user').then(user => {
      this.user = JSON.parse(user);
      console.log("This is user data");
      console.log(this.user);
      this.vote=this.user.vote;

      console.log("Vote is:",this.vote);
    }).catch(console.log);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotePage');
  }

}
