import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { geoKey } from './api-keys';
import { Geocache } from './geocache.model';


@Injectable()
export class GeocacheService {
  geocaches: FirebaseListObservable<any[]>;

  constructor(private http: Http, private af: AngularFireDatabase) {
    this.geocaches = af.list('geocaches');
  }

  getGeocacheUsingAddress(address: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+geoKey);
  }

  getGeocacheUsingLatLong(lat: string, lng: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey);

  }

  getGeocaches(){
   return this.geocaches;
  }

  addGeocacheToDB(newGeocache: Geocache){
    this.geocaches.push(newGeocache);
  }

  findGeocacheDetail(key: string){
    return this.af.object('geocaches/' + key);
  }

  updateGeocache(geocacheToUpdate){
    var geocacheEntryInDB = this.findGeocacheDetail(geocacheToUpdate.$key);
    geocacheEntryInDB.update({name: geocacheToUpdate.name});
  }

  deleteGeocache(geocacheToDelete){
    var geocacheEntryInDB = this.findGeocacheDetail(geocacheToDelete.$key);
    geocacheEntryInDB.remove();
  }

}
