# Shirushi-no-Machi App
This is at the prototype stage of development as of May 2025.

<a href="https://sapporoalex.github.io/Shirushinomachi-proto/"><img src="https://github.com/SapporoAlex/Shirushinomachi-proto/blob/main/android-chrome-192x192.png"></a>
<caption>Current version hosted on GitHub</caption>

## Current Stage
- Title page
- Create shirushi page
- View map page, with stylised map (<a href="https://leafletjs.com/">Leaflet</a>)
- Shirushi are placed at a random positon within a 500 meter radius of the user.
- Shirushi are currently saved in local storage, and are removed after 24 hours.
- The user is not currently limited to how many Shirushi they can place.

## To Be Added
- User sign up
- Change DB to have the following columns: user (name), premium (bool), marker (list of objects(creation date, colour, shape, message)), age (int or null), gender (char(m,f,o) or null)
- Change markers to save as objects linked to users.
- Add API for leaflet map (needed for non-local running)
- Hosting
- Shirushi data visualisation pages.
- Shirushi records visibility for premium users.

## Gallery
<img src="https://github.com/SapporoAlex/Shirushinomachi-proto/blob/main/demo1.png" height="300px" width="auto">
<img src="https://github.com/SapporoAlex/Shirushinomachi-proto/blob/main/demo2.png" height="300px" width="auto">
<img src="https://github.com/SapporoAlex/Shirushinomachi-proto/blob/main/demo3.png" height="300px" width="auto">

## Authors
~Moe Iguchi Luick (Designer, Creator)
~Alex McKinley (Programmer)

## Acknowlegments
<a href="https://leafletjs.com/">Leaflet</a>
