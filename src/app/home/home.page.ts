import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonInput, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; // add specific icons
import { heart } from 'ionicons/icons'; // name the icons
import { RouterLink } from '@angular/router'; // manually import RouterLink (lecture notes, create an ionic app)
import { FormsModule } from '@angular/forms'; // for ngModel use
import { MyHttp } from '../services/my-http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, RouterLink, IonInput, IonButtons, FormsModule],
})
export class HomePage {

  searchTerm = '';

  constructor(private mhs: MyHttp) {
    addIcons({heart}); // register the icons for use everywhere
  }

  ngOnInit() {
    this.getTrending();
  }

  getTrending() {
    this.mhs.get("https://api.themoviedb.org/3/trending/movie/day?api_key=862da29609cec096571a286070ebb32d").subscribe(
      {
        next: (results) => console.log(results),
        error: (error) => console.error("error", error),
        complete: () => console.log('complete')
    })
  }

  onSearch() {
    console.log(this.searchTerm); // print the input to console when search is pressed
  }

}