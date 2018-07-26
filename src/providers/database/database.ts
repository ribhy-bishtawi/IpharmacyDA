import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ShoppingListProvider {
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
}




