import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SignupPage } from '../pages/signup/signup';
import { BallotPage } from '../pages/ballot/ballot';
import { CloudPage } from '../pages/cloud/cloud';


import { MenuPage } from '../pages/menu/menu';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = MenuPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToSignup(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SignupPage);
  }goToBallot(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BallotPage);
  }goToCloud(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CloudPage);
  }
}
