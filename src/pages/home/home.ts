import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchTerm: string = '';
  items: any;
  medicine:string;
  insuranceProviders = [
    {name: "Trust", imageUrl: "trust1.jpg"},
    {name: "Takaful", imageUrl: "tkafl1.png"},
    {name: "Globemed", imageUrl: "globemed1.jpg"},
    {name: "Nathealth", imageUrl: "nathealth1.jpg"},
    {name: "Mashreq", imageUrl: "mashreq1.png"},
    {name: "Ahlia", imageUrl: "ahlia1.png"},
  ];
  selectedInsurance:string;

  constructor(public navCtrl: NavController,) {
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

 
