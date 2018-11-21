import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItsubmissionPage } from '../itsubmission/itsubmission';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
   navigateToItSubmission(){
    this.navCtrl.push(ItsubmissionPage);
  }
}
