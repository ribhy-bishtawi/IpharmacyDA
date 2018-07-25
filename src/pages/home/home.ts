import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { MapPage } from './../map/map';
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
  }
  showMap() {
        this.navCtrl.push(MapPage);
      }
  ionViewDidLoad() {
 
    this.setFilteredItems();

}

setFilteredItems() {

}
}

 
