import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonCardContent, IonCard, IonBackButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; // add specific icons
import { heart, homeOutline, heartOutline } from 'ionicons/icons'; // name of the icons
import { ActivatedRoute } from '@angular/router'; // for adding params to routes
import { MyHttp } from '../services/my-http';
import { MyFavourites } from '../services/my-favourites';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonButton, IonIcon, RouterLink, IonCardContent, IonCard, IonBackButton],
})
export class MovieDetailsPage implements OnInit {

  key:string = "api_key=862da29609cec096571a286070ebb32d";
  movieId: any;
  movie:any = [];
  isFavourite = false;
  castMember:any = [];
  crewMember:any = [];


  constructor(private route: ActivatedRoute, private mhs: MyHttp, private mfs: MyFavourites) {
    addIcons({heart, homeOutline, heartOutline}); // register the icons for use everywhere
  }

  ngOnInit() {
    this.getMovie();   
  }

  getMovie() {
    // snapshot = current state of the route
    // paramMap = contains all the route paramaters { id: "123" }
    // get the current id
    this.movieId = this.route.snapshot.paramMap.get('id');
    console.log(this.movieId);
    const movieUrl = "https://api.themoviedb.org/3/movie/" + this.movieId + "?" + this.key;
    console.log(movieUrl);
    this.mhs.get(movieUrl).subscribe(
      {
        next: async (data) => {
          console.log(data);
          this.movie = data;
          this.isFavourite = await this.mfs.isFavourite(this.movie.id);
          this.getInfo();
        },
        error: (error) => console.error("error", error),
        complete: () => console.log("complete")
      }
    )
  }

  async addFavourites() {
    await this.mfs.addFavourites(this.movie);
    this.isFavourite = true;
  }

  async removeFavourites() {
    await this.mfs.removeFavourite(this.movie.id);
    this.isFavourite = false;
  }

  getInfo() {
    const infoUrl = "https://api.themoviedb.org/3/movie/" + this.movie.id + "/credits?" + this.key;
    console.log(infoUrl);

    this.mhs.get(infoUrl).subscribe(
      {
        next: (data) => { 
          console.log(data); // log for debugging
          this.castMember = data.cast;
          this.crewMember = data.crew;
        },
        error: (error) => console.error("error", error),
        complete: () => console.log("complete")
    })
  }

}
