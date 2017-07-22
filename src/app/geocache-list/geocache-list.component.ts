import { Component, Input, OnInit } from '@angular/core';
import { GeocacheService } from '../geocache.service';
import { Geocache } from '../geocache.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geocache-list',
  templateUrl: './geocache-list.component.html',
  styleUrls: ['./geocache-list.component.css'],
  providers: [GeocacheService]
})
export class GeocacheListComponent implements OnInit {
  adding: boolean = false;
  geocaches: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  
  constructor(private router: Router, private geocacheService: GeocacheService) { }

  ngOnInit() {
    this.geocaches = this.geocacheService.getGeocaches();
  }
  startAdding() {
    this.adding = true;
  }

  goToGeocacheDetailPage(clickedGeocache) {
   this.router.navigate(['geocaches', clickedGeocache.$key]);
 };

}
