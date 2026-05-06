import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonInput, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; // add specific icons
import { heart } from 'ionicons/icons'; // name the icons
import { RouterLink } from '@angular/router'; // manually import RouterLink (lecture notes, create an ionic app)
import { FormsModule } from '@angular/forms'; // for ngModel use

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, RouterLink, IonInput, IonButtons, FormsModule],
})
export class HomePage {

  searchTerm = '';

  constructor() {
    addIcons({heart}); // register the icons for use everywhere
  }

  onSearch() {
    console.log(this.searchTerm); // print the input to console when search is pressed
  }

}