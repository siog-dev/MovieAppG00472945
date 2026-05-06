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
  
}
