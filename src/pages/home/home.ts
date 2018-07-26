import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { FeedbackPage } from '../feedback/feedback';
import { MapPage } from './../map/map';
import { Subscriber } from 'rxjs/Subscriber';
import { AdditemsPage } from './../additems/additems';
import { ShoppingListProvider } from './../../providers/database/database';
import { first } from 'rxjs/operators';
import firebase from 'firebase';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public countryList: Array<any>;
  public loadedCountryList: Array<any>;
  public pharmacyref: firebase.database.Reference;

  splash = true;
  secondPage = HomePage;
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

  constructor(public navCtrl: NavController, private db: ShoppingListProvider,
    private toastCtrl: ToastController) {


  }

  openfeedback() {
    this.navCtrl.push(FeedbackPage)
  };

  opencontact() {
    this.navCtrl.push(ContactPage)
  };


  openfirebas() {
    this.navCtrl.push(AdditemsPage)

  }
  private isStringInCommaDelimitedString(commaString: string, stringToFind: string) {
    const splitStrings = commaString.split(",").map(s => s.trim().toLowerCase());
    return splitStrings.indexOf(stringToFind.toLowerCase()) > -1;
  }
  showError(message) {
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });

    toast.present();
  }

  goToNearestPharmacy(longLat) {
    this.db.getPharmacies().pipe(first()).subscribe(pharmacies => {
      const validPharmacies = pharmacies.filter((pharmacy) => {
        //TODO: check if valid pharmacy
        if (this.medicine &&
          !this.isStringInCommaDelimitedString(pharmacy['Medicine'], this.medicine)) {
          console.log("hi")
        }
        if (this.selectedInsurance &&
          !this.isStringInCommaDelimitedString(pharmacy['insurance'], this.selectedInsurance)) {
          return false
        }
        return true;
      });

      const closestPharmacy = validPharmacies[0];

      // TODO: find closest pharmacy
      console.log(validPharmacies);

      this.navCtrl.push(MapPage, {
        pharmacy: closestPharmacy,
        currentLocation: longLat
      });
    });
  }

  showMap(input) {
    console.log("clicked map")
    if (!navigator.geolocation) {
      // TODO: Show error
      this.showError("Cant find your location")
      return;
    }
    const defaultLocation = [35.190017, 31.942860];
    navigator.geolocation.getCurrentPosition(position => {
      const longLat = [position.coords.longitude, position.coords.latitude];
      this.goToNearestPharmacy(longLat);
    }, (error) => {
      this.showError("Cant find your location")
      this.goToNearestPharmacy(defaultLocation);
    });
  }

  ionViewDidLoad() {

    this.setFilteredItems();
    setTimeout(() => this.splash = false, 4000);


  }

  selectInsurance(insurance1) {
    this.selectedInsurance = insurance1.name;
  }

  setFilteredItems() {

  }
}


