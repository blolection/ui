import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SignupPage } from '../pages/signup/signup';
import { BallotPage } from '../pages/ballot/ballot';
import { VotePage} from '../pages/vote/vote';

import { Storage } from '@ionic/storage';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any;
    user:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.rootPage=SignupPage;
    });

    storage.ready().then(() => {
      storage.get('user').then(user => {
        console.log('Getting storage');
        this.user = JSON.parse(user);
        console.log("This is user data");
        console.log(this.user);

        if(this.user){
          if(this.user.token.length && this.user.vote.length>0){
            this.rootPage = VotePage;          
          }else if(this.user.token.length){
            this.rootPage= BallotPage;
          } 
        } else {
          this.rootPage= SignupPage;
        }



      }).catch(console.log);
    });
  }
}
