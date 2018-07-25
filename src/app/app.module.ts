import { FeedbackPage } from './../pages/feedback/feedback';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MapPageModule } from './../pages/map/map.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { firebaseConfig } from '../config';
import { ShoppingListProvider } from '../providers/database/database';
import {AdditemsPage}   from './../pages/additems/additems'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedbackPage,
    AdditemsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MapPageModule,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedbackPage,
    AdditemsPage,
  ],
  providers: [
    AngularFireDatabase, 
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListProvider,
  ]
})
export class AppModule {}
