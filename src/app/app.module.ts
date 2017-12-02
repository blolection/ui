import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SignupPage } from '../pages/signup/signup';
import { BallotPage } from '../pages/ballot/ballot';
import { VotePage} from '../pages/vote/vote'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AuthServiceProvider} from '../providers/auth-service/auth-service'

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    SignupPage,
    BallotPage,
    VotePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
       
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignupPage,
    BallotPage,
    VotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}