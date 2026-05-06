# Movie App (Ionic + TMDB)

## Overview

A movie application for mobile devices which uses TMDB as an API and allows users to view trending movies, search for movies in a search bar, add and remove movies to favourites, view details about those movies and view details about the individual cast and crew members.

---

## Features

- View the **Home Page** on app launch or when the home icon is clicked
- View **Today's Trending Movies** on the home page
- Use a **search bar** to find movies
- **See details** about movies and cast and crew
- **Add and remove** movies from **Favourites**
  - Button will change between outline and fill respective to add and remove functionality
- **Access Favourites** from the favourites icon
- **Remember Favourites** when the app is closed and re-opened

---

## Pages

- **Home Page**
  - The App Name (student number) and Favourites Icon at the top
  - A Search Bar (with "Movie Name" as a hint)
  - **Today's Trending Movies**: *displayed when **no** search string is entered in the search bar*
  - **Search Results**: *displayed when a search string **is** entered in the search bar*

- **Movie Details Page**
  - Opened when a movie is clicked
  - Display a discription of the movie
  - Display the photo and details of the cast and crew
  - Display a working button to "Add to Favourites" if the movie is not already a favourite
  - Diplay a working button to "Remove from Favourites" if the movie is in favourites

- **Details Page**
  - Opened when a cast or crew member is clicked
  - Display information about the cast or crew member:
    - Picture
    - Date of birth(DOB) and date of death(DOD)
    - Also known as (AKA)
    - Description
    - Other Movies
  - If information is not available, it will not be displayed  

- **Favourites Page**
  - Opened when the favourites icon is clicked
  - Display the photo and title of any movies added to favourites
  - A "Details" button under each movie that opens the Movie Details page.

---

## Technologies Used

- Ionic
- Angular
- TypeScript
- Visual Studio Code
- [TMDB](https://www.themoviedb.org) API
- ionic/storage-angular

---

## API

This project uses data from:  
https://www.themoviedb.org/

---

## Installation & Running

1. Clone the repository  
2. Install dependencies  
   ```
   npm install
   ```
3. Run the app  
   ```
   ionic serve
   ```

---

## Design Decisions

- The page name **"Details"** was kept as specified in the assignment brief.  
- A more descriptive name such as **"Person Details"** would improve clarity, particularly because the application also includes a Movie Details page.  
- The original naming was retained to remain consistent with the project requirements.
- Added "clear input" functionality to the search bar

---

## Code References

- I used code from [ionicframework.com](https://ionicframework.com/docs/api/button) to figure out how to add icons to a button
- I used code from [stackoverflow.com](https://stackoverflow.com/questions/45247490/right-alignment-for-a-button-in-ion-col) to align a button to the right of another element and to make a button fill the length of a page 
- I lecture notes on how to create an ionic app to add a router link to my favourites button
- I used [ionicframework.com](https://ionicframework.com/docs/api/searchbar) to write the code for the searchbar, which was later replaced with code from lecture notes and [ionicframework.com](https://ionicframework.com/docs/api/input)
- Amended my homepage header as per documentation on [ionicframework.com](https://ionicframework.com/docs/api/toolbar) regarding buttons in toolbars
- Connected the search bar and the search button as per lecture notes (data binding & directives)
- Created the http client as per lecture notes (http client) (commit a8d0308 and f3966d5)
- Lecture notes used app.config.ts for adding the HttpClient to the list of providers. Struggled to find alternative documentation. Eventually found solution on [angular.dev](https://angular.dev/guide/http/setup). Reconfigured the code for my project.
- Used [ionicframework.com](https://ionicframework.com/docs/api/card) documentation for creating the ion-cards
- Used the image basics page on [themoviedb.org](https://developer.themoviedb.org/docs/image-basics) to learn how to link the path to the images and the configuration details page on [themoviedb.org](https://developer.themoviedb.org/reference/configuration-details) for image sizes
- To make search terms URL safe I used [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
- Searching for movies [TMDB](https://developer.themoviedb.org/docs/search-and-query-for-details), [TMDB](https://developer.themoviedb.org/reference/search-movie)
- Routing to other pages [TMDB](https://ionicframework.com/docs/angular/navigation)
- To get the ID of the recently "clicked" movie, for use on the movie-details page [stackoverflow.com](https://stackoverflow.com/questions/62437102/angular-activatedroute-parammap-getid-not-working-as-expected) and [angular.dev](https://angular.dev/api/router/ActivatedRoute) and [stackoverflow](https://stackoverflow.com/questions/56271351/how-to-get-id-from-the-url-using-snapshot-or-activatedroute-subscriber-in-angula)
- Lecture notes on Ionic Storage used for importing storage modules, creating the data service



---
## Author

Siog Murphy