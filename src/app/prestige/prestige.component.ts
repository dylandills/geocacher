import { Component, OnInit } from '@angular/core';
import { GeocacheService } from '../geocache.service';
import { Geocache } from '../geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-prestige',
  templateUrl: './prestige.component.html',
  styleUrls: ['./prestige.component.css'],
  providers: [ GeocacheService ]
})
export class PrestigeComponent implements OnInit {
  savedGeocaches: FirebaseListObservable <any[]> = null;

  constructor(private geocacheService: GeocacheService) { }

  ngOnInit() {
    this.savedGeocaches = this.geocacheService.getGeocaches();
  }
  deleteGeocache(selectedGeocache: Geocache) {
    this.geocacheService.deleteGeocache(selectedGeocache);
    alert('This geocache has been deleted from your prestige! Add it back if you wanna ;)');
  }

}
