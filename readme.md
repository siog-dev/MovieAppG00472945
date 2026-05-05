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

---

## Code References

- I used code from [ionicframework.com](https://ionicframework.com/docs/api/button) to figure out how to add icons to a button
- I used code from [stackoverflow.com](https://stackoverflow.com/questions/45247490/right-alignment-for-a-button-in-ion-col) to align a button to the right of another element and to make a button fill the length of a page 
- I used code from lecture notes on how to create an ionic app to add a router link to my favourites button
---
## Author

Siog Murphy