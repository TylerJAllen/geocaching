import { Injectable } from '@angular/core';
import { Geocache } from './geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GeocacheService {
  geocaches: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.geocaches = af.list('geocaches');
  }

  getGeocaches(){
   return this.geocaches;
 }

 addGeocaheToDB(newGeocache: Geocache){
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
