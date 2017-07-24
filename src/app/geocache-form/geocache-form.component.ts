import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GeocacheApiService } from '../geocache-api.service';
import { GeocacheService } from '../geocache.service';

@Component({
  selector: 'app-geocache-form',
  templateUrl: './geocache-form.component.html',
  styleUrls: ['./geocache-form.component.css'],
  providers: [ GeocacheApiService, GeocacheService ]
})

export class GeocacheFormComponent {
  locations: any[]=null;
  address: string=null;
  constructor(private router: Router, private geocacheApi: GeocacheApiService) { }

  getLocation(lat: string, lng: string) {
    this.geocacheApi.getByLatAndLng(lat, lng).subscribe(response => {
    this.address = response.json().results[0].formatted_address;
    });
  }
  getLocationByAddress(streetNumber: string, route: string, locality: string, admnArea: string) {
    this.geocacheApi.getByAddress (streetNumber, route, locality, admnArea).subscribe (response => {
      this.locations = response.json().results[0].geometry.location;
    });
  }
  saveGeocache (lat: string, lng: string) {
  this.geocacheApi.saveGeocaches (lat, lng);
  }
}
