import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';

@Injectable()
export class ShoppingListProvider {
  public PharmacyRef:firebase.database.Reference;
  public pharmacylist:Array<any>;
  public loadedPharmacyList:Array<any>;

 constructor(public db: AngularFireDatabase) { }

 getItems() {
   return this.db.list('Pharmacy').snapshotChanges();
 }

 getPharmacies() {
  return this.db.list('Pharmacy').valueChanges();
}

 addItem(Name,Location,PhoneNumber,insurance,Medicine) {
   this.db.list('Pharmacy').push({
     Name,
     Location,
     PhoneNumber,
     insurance,
     Medicine,
   });
 }

 removeItem(id) {
   this.db.list('Pharmacy').remove(id);
 }
 filter(){
  this.PharmacyRef = firebase.database().ref('/Pharmacy');
  this.PharmacyRef.on('value', pharmacylist => {
    let pharmacies = [];
    pharmacylist.forEach( pharmacy => {
      pharmacies.push(pharmacy.val());
      return false;
    });

    this.pharmacylist = pharmacies;
    this.loadedPharmacyList = pharmacies;
  });
 }
}




