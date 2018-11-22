import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UploaddocumentPage } from '../uploaddocument/uploaddocument';
import { ScandocumentPage } from '../scandocument/scandocument';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  uploaddocument = UploaddocumentPage;
  scandocument = ScandocumentPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
