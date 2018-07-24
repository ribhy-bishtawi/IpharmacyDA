import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchTerm: string = '';
  items: any;

  constructor(public navCtrl: NavController,) {

  }

  ionViewDidLoad() {
 
    this.setFilteredItems();

}

setFilteredItems() {

}
}

 
