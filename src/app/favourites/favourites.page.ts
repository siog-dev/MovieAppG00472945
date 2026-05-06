import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons'; // add specific icons
import { heart, homeOutline, heartOutline } from 'ionicons/icons'; // name of the icons
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { MyFavourites } from '../services/my-favourites';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, RouterLink, IonCard, IonCardContent]
})
export class FavouritesPage implements OnInit {

  favourites:any = [];

  constructor(private mfs: MyFavourites) { 
    addIcons({heart, homeOutline, heartOutline});
  }

  ngOnInit() {
    this.loadFavourites();
  }

  async loadFavourites() {
    this.favourites = await this.mfs.getFavourites();
    console.log(this.favourites);
  }

}
