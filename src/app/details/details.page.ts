import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MyHttp } from '../services/my-http';
import { addIcons } from 'ionicons'; // add specific icons
import { heart, homeOutline, heartOutline } from 'ionicons/icons'; // name of the icons
import { ActivatedRoute } from '@angular/router'; // for adding params to routes
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonCardContent, IonCard, IonItem, IonLabel, IonList, IonAccordionGroup, IonAccordion, IonThumbnail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, RouterLink, IonCardContent, IonCard, IonItem, IonLabel, IonList, IonAccordionGroup, IonAccordion, IonThumbnail]
})
export class DetailsPage implements OnInit {

  key:string = "api_key=862da29609cec096571a286070ebb32d";
  personId:any;
  person:any = {};
  castOther:any = [];
  crewOther:any = [];

  constructor(private mhs: MyHttp, private route: ActivatedRoute) { 
    addIcons({heart, homeOutline, heartOutline}); // register the icons for use everywhere
  }

  ngOnInit() {
    this.getPerson();
  }

  getPerson() {
    this.personId = this.route.snapshot.paramMap.get('id');

    const personUrl = "https://api.themoviedb.org/3/person/" + this.personId + "?" + this.key;
    console.log(personUrl);

    this.mhs.get(personUrl).subscribe(
      {
        next: (data) => { 
          console.log(data); // log for debugging
          this.person = data;
          this.getOtherMovies();
        },
        error: (error) => console.error("error", error),
        complete: () => console.log("complete")
    })
  }

  getOtherMovies() {
    this.personId = this.route.snapshot.paramMap.get('id');

    const personUrl = "https://api.themoviedb.org/3/person/" + this.personId + "/movie_credits?" + this.key;
    console.log(personUrl);

    this.mhs.get(personUrl).subscribe(
      {
        next: (data) => { 
          console.log(data); // log for debugging
          this.castOther = data.cast;
          this.crewOther = data.crew;
        },
        error: (error) => console.error("error", error),
        complete: () => console.log("complete")
    })
  }

}
