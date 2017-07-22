import { Component, Input, OnInit } from '@angular/core';
import { GeocacheService } from '../geocache.service';
import { Geocache } from '../geocache.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-new-geocache',
  templateUrl: './new-geocache.component.html',
  styleUrls: ['./new-geocache.component.css'],
  providers: [GeocacheService]
})
export class NewGeocacheComponent implements OnInit {

  constructor(private geocacheService: GeocacheService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(creator: string, lat: string, lng: string, address: string){
    var newGeocache: Geocache;
    var returnedLat: string;
    var returnedLng: string;
    var returnedAddress: string;
    if(!lat || !lng){
      console.log("lat and lng are empty");
      this.geocacheService.getGeocacheUsingAddress(address).subscribe(response =>{
        returnedLat = response.json().results[0].geometry.location.lat;
        returnedLng = response.json().results[0].geometry.location.lng;
        returnedAddress = response.json().results[0].formatted_address;
        newGeocache= new Geocache(creator, returnedLat, returnedLng, returnedAddress);
        this.geocacheService.addGeocacheToDB(newGeocache);
        console.log(newGeocache);
      });
    } else if(!address){
      console.log("address is empty");
      this.geocacheService.getGeocacheUsingLatLong(lat, lng).subscribe(response =>{
        returnedLat = response.json().results[0].geometry.location.lat;
        returnedLng = response.json().results[0].geometry.location.lng;
        returnedAddress = response.json().results[0].formatted_address;
        newGeocache = new Geocache(creator, returnedLat, returnedLng, returnedAddress);
        this.geocacheService.addGeocacheToDB(newGeocache);
        console.log(response.json());
        console.log(newGeocache);
      });
    }
    // var newGeocache: Geocache = new Geocache(creator, returnedLat, returnedLng, returnedAddress);


    // this.router.navigate(['']);
  }

}
