import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GeocacheApiService } from '../geocache-api.service';

@Component({
  selector: 'app-geocache-form',
  templateUrl: './geocache-form.component.html',
  styleUrls: ['./geocache-form.component.css'],
  providers: [ GeocacheApiService ]
})

export class GeocacheFormComponent {
  locations: any[]=null;
  address: string=null;
  constructor(private router: Router, private geocacheApi: GeocacheApiService) { }

  getLocationByLatAndLong(lat: string, long: string) {
    this.geocacheApi.getByLatAndLng(lat, long).subscribe(response => {
    this.address = response.json().results[0].formatted_address;
    });
  }
}
