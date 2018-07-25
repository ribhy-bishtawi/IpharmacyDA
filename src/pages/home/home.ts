import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { MapPage } from './../map/map';
import {AdditemsPage} from  './../additems/additems';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchTerm: string = '';
  items: any;

  constructor(public navCtrl: NavController,) {

   
  }
  openfeedback(){
    this.navCtrl.push(FeedbackPage)
  };

  openfirebas(){
    this.navCtrl.push(AdditemsPage)

  }
  showMap() {
        this.navCtrl.push(MapPage);
      }
}

 
