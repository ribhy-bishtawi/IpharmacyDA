import { ShoppingListProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
 selector: 'page-shopping-list',
 templateUrl: 'additems.html',
})
export class AdditemsPage {
 items: Observable<any>;
 newItemName:string;
 Location: string;
 PhoneNumber: number;
 Insurancees: string;
 MedicinesName: string;
 //31.966600,35.193686  lana 
// 31.968923, 35.19300 3alloosh

 constructor(public navCtrl: NavController, public shoppingListProvider: ShoppingListProvider) {
   this.items = shoppingListProvider.getItems();
 }

 addItem(newItemName,location,Phonenumber,insurance,Medicine) {
   this.shoppingListProvider.addItem(this.newItemName,this.Location,this.PhoneNumber,this.Insurancees,this.MedicinesName);
   this.newItemName = '';
   this.Location = '';
   this.PhoneNumber = ''; 
   this.Insurancees = '';
   this.MedicinesName = '';

 }

 removeItem(id) {
   this.shoppingListProvider.removeItem(id);
 }
}
