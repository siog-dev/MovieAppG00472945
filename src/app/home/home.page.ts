import { Component } from '@angular/core';
// import IonIcon
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonIcon, IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; // add specific icons
import { heart } from 'ionicons/icons'; // name the icons
import { RouterLink } from '@angular/router'; // manually import RouterLink (lecture notes, create an ionic app)

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonIcon, RouterLink, IonSearchbar],
})
export class HomePage {
  constructor() {
    addIcons({heart}); // register the icons for use everywhere
  }
}
