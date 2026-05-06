import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; // add specific icons
import { heart, homeOutline } from 'ionicons/icons'; // name the icons
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, RouterLink],
})
export class MovieDetailsPage implements OnInit {

  movieId: any;

  constructor(private route: ActivatedRoute) {
    addIcons({heart, homeOutline}); // register the icons for use everywhere
  }

  ngOnInit() {
    // snapshot = current state of the route
    // paramMap = contains all the route paramaters { id: "123" }
    // get the current id
    this.movieId = this.route.snapshot.paramMap.get('id');
    console.log(this.movieId);
  }

}
