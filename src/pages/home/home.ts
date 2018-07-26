import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { FeedbackPage } from '../feedback/feedback';
import { MapPage } from './../map/map';
import { Subscriber } from 'rxjs/Subscriber';
import { AdditemsPage } from './../additems/additems';
import { ShoppingListProvider } from './../../providers/database/database';
import { first } from 'rxjs/operators';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchTerm: string = '';
  items: any;
  medicine: string;
  insuranceProviders = [
    { name: "Trust", imageUrl: "trust1.jpg" },
    { name: "Takaful", imageUrl: "tkafl1.png" },
    { name: "Globemed", imageUrl: "globemed1.jpg" },
    { name: "Nathealth", imageUrl: "nathealth1.jpg" },
    { name: "Mashreq", imageUrl: "mashreq1.png" },
    { name: "Ahlia", imageUrl: "ahlia1.png" },
  ];
  selectedInsurance: string;

  constructor(public navCtrl: NavController, private db: ShoppingListProvider) {
  }
  openfeedback() {
    this.navCtrl.push(FeedbackPage)
  };

  openfirebas() {
    this.navCtrl.push(AdditemsPage)

  }
  showMap() {
    this.db.getPharmacies().pipe(first()).subscribe(pharmacies => {
      
      for (let pharmacy of pharmacies) {
        console.log(pharmacy);
      }
      this.navCtrl.push(MapPage, {
        location: [ 35.183548,31.947758 ]
      });
    });
  }
  ionViewDidLoad() {

    this.setFilteredItems();

  }

  selectInsurance(insurance1) {
    this.selectedInsurance = insurance1.name;
  }

  setFilteredItems() {

  }
}


