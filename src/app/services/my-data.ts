import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root', // available everywhere
})
export class MyData {
  
  // inject the storage service so it can be used
  constructor(private storage: Storage) {
    this.init(); // initialize the storage
  }

  async init() {
    // instance of storage
    this.storage = await this.storage.create();
  }

  // set the storage options
  async set(key: string, value: any){
    // key - where data is stored (favourites)
    // value - the data that is stored (movies)
    await this.storage.set(key, value); 
  }

  // get the data that is stored
  async get(key: string) {
    // look for the data in favourites
    return await this.storage.get(key);
  }

}
