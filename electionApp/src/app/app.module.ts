import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CartPage } from '../pages/cart/cart';
import { CloudPage } from '../pages/cloud/cloud';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { BoothServiceProvider } from '../providers/booth-service/booth-service';
import { BallotServiceProvider } from '../providers/ballot-service/ballot-service';
import { VoteServiceProvider } from '../providers/vote-service/vote-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CartPage,
    CloudPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CartPage,
    CloudPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AuthServiceProvider,
    BoothServiceProvider,
    BallotServiceProvider,
    VoteServiceProvider
  ]
})
export class AppModule {}