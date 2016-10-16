import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventDetailPage } from '../event-detail-page/event-detail-page';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public events = [];

  constructor(public navCtrl: NavController, public dataService: Data) {
    this.events = this.dataService.getData();
  }

  ionViewDidLoad(){
    //Called when page view is loaded (lifecycle function)
  }

  addItem(){

  }

  viewEvent(event){
    this.navCtrl.push(EventDetailPage, {
      event: event
    });
  }

}