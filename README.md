This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.
#### An Epicodus independent project in Angular2, 07.21.17

#### **By Dylan Dills**

## Description

This website is for Geocache Them All! to list geocaching sites and attract new members.

|Behavior| Input (User Action/Selection) |Output|
|---|:---|:---|
|User can enter in the latitude and longitude of a known geocache and receive the corresponding physical address of its location. | "lat set to 40.714224, lng set to -73.96145"|"277 Bedford Avenue, Brooklyn, NY 11211, USA"|
|User can see the most specific result first.| "lat set to 40.714224, lng set to -73.96145"|"277 Bedford Avenue, Brooklyn, NY 11211, USA"|
|User can enter in the physical address of a geocache that they have hidden and receive the corresponding latitude and longitude.|"277 Bedford Avenue, Brooklyn, NY 11211, USA"|"lat set to 40.714224, lng set to -73.96145"|

## To download and run this project:
- Clone [repo](https://github.com/dylandills/geocacher.git) to your desktop.
- Ensure you have Angular 4 installed by running `ng -v`.

| If Not Run One of these Commands |
| --- |
| For Windows |
|`npm install @angular/common@next @angular/compiler@next @angular/compiler-cli@next @angular/core@next @angular/forms@next @angular/http@next @angular/platform-browser@next @angular/platform-browser-dynamic@next @angular/platform-server@next @angular/router@next @angular/animations@next --save` |
| For Linux/Mac |
|`npm install @angular/{common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router,animations}@next --save` |

- Run `$ npm install` and `$ bower install` in your terminal to gather required packages and styling dependencies.
- You will need to request an API key from [Google Maps Geocaching API](https://developers.google.com/maps/documentation/geocoding/start).
- In the src/app folder, create an `api-keys.ts` file.
- Type in ' export var geoKey = "{paste in your API key here}"; ' and save the file.
- install Firebase `npm install angularfire2@4.0.0-rc.0 firebase --save`
- install promise-polyfill patch `npm install promise-polyfill --save-exact`
- You will need a [Firebase API](https://firebase.google.com/) key to run this code.
    - Go to the website and create a free account. (Links to your gmail if you have one.)
    - In the user dashboard area, select the option `create a new project` and provide the name `GeochacherAPI`.
    - You'll be taken to an "Overview" area. Select the option `add Firebase to your web app`.
    - Copy the information in the pop-up window to use in creating an `api-keys.ts` file.
    - Go to the Database area by selecting the Database option from the navbar on the left-hand side. Near the top of the page, there should be a blue navbar reading Realtime Database. Below this, select the option that reads RULES.
    - Change both the ".read", and ".write" properties here to "true" like this:<br> `
    {
  "rules": {
    ".read": "true",
    ".write": "true"
    }
    }`
    - In the src/app folder, add this to the `api-keys.ts` file.
    - Paste the information from the pop-up window into this format:
        ```typescript
        export var masterFirebaseConfig = {
          apiKey: "xxxx",
          authDomain: "xxxx.firebaseapp.com",
          databaseURL: "https://xxxx.firebaseio.com",
          storageBucket: "xxxx.appspot.com",
          messagingSenderId: "xxxx"
        };```
    - Click on the Database option in the left-hand navigational menu.
    - Select the 3 vertical dots on the right-hand side of the grey bar with your database URL on it. (It's right next to the + and - buttons). This should bring up a small menu.
    - Select Import JSON from this menu. This will result in a modal window prompting you to upload a file.
    - Locate the sampleGeocache.json file from the project folder, and upload it.

- Run `ng serve` for a dev server. Navigate to http://localhost:4200/ in a web browser to view the project.

## Support and contact details
To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

If you have any issues or have questions, ideas, concerns, or contributions please contact the contributor through Github.

## Technologies Used
* Angular
* API
* Firebase
* HTML
* CSS

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **Dylan Dills**
