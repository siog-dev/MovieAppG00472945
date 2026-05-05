import { Component } from '@angular/core';
// import IonIcon
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonIcon } from '@ionic/angular/standalone';
// https://ionicframework.com/docs/api/button
import { addIcons } from 'ionicons'; // add specific icons
import { heart } from 'ionicons/icons'; // name the icons

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonIcon],
})
export class HomePage {
  constructor() {
    addIcons({heart}); // register the icons for use everywhere
  }
}
