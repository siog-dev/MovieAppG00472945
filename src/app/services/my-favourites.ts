import { Injectable } from '@angular/core';
import { MyData } from './my-data';

@Injectable({
  providedIn: 'root',
})
export class MyFavourites {

  private key = "favourites";

  constructor(private data: MyData) { }

  async getFavourites() {
    const favourites = await this.data.get(this.key);
    return favourites || []; // return empty array if nothing is stored yet
  }

  async addFavourites(movies: any) {
    const favourites = await this.getFavourites();

    favourites.push(movies);

    await this.data.set(this.key, favourites);
  }

  async isFavourite(movieId: number) {
    const favourites = await this.getFavourites();

    // .some() checks if any item in the array (the favourites array) matches this (*) condition
    // * does movie.id(the id of the data item from our favourites array) match the movieID(current movie in movie details)
    return favourites.some((movie: any) => movie.id === movieId);
  }

  async removeFavourite(movieId: number) {
    const favourites = await this.getFavourites();

    // Creates a new array that contains all movies except the one with this id
    // /filter() keeps all items in the array (favourites array) that do NOT match this id
    const updatedFavourites = favourites.filter((movie: any) => movie.id !== movieId);
  
    await this.data.set(this.key, updatedFavourites);
  }
  
}
