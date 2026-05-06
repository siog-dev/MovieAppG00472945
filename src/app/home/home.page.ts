import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonInput, IonButtons, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; // add specific icons
import { heart } from 'ionicons/icons'; // name the icons
import { RouterLink } from '@angular/router'; // manually import RouterLink (lecture notes, create an ionic app)
import { FormsModule } from '@angular/forms'; // for ngModel use
import { MyHttp } from '../services/my-http'; // get my own http service for use in here
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, RouterLink, IonInput, IonButtons, FormsModule, CommonModule, IonCard, IonCardContent],
})
export class HomePage {

  searchTerm = ""; // string entered into the search input box will be stored here
  movies:any = []; // array of movie results

  constructor(private mhs: MyHttp) {
    addIcons({heart}); // register the icons for use everywhere
  }

  // runs when page loads
  ngOnInit() {
    this.getTrending(); // fetches trending movies
  }

  // method to get the trending movies results
  getTrending() {
    // api call
    this.mhs.get("https://api.themoviedb.org/3/trending/movie/day?api_key=862da29609cec096571a286070ebb32d").subscribe(
      {
        next: (data) => { 
          console.log(data); // log for debugging
          this.movies = data.results; // assign the 'results' from API data to the movies array
        },
        error: (error) => console.error("error", error),
        complete: () => console.log("complete")
    })
  }

  // method to get movie results following a search
  onSearch() {
    const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=862da29609cec096571a286070ebb32d&query=" + encodeURIComponent(this.searchTerm);
    
    this.mhs.get(searchUrl).subscribe(
      {
        next: (data) => {
          console.log(data);
          this.movies = data.results;
        },
        error: (error) => console.error("error", error),
        complete: () => console.log("complete")
      }
    )
  }
  
}