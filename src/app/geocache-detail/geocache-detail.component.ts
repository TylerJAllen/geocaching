import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { GeocacheService } from '../geocache.service';
import { Geocache } from '../geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geocache-detail',
  templateUrl: './geocache-detail.component.html',
  styleUrls: ['./geocache-detail.component.css'],
  providers: [GeocacheService]
})
export class GeocacheDetailComponent implements OnInit {
  geocacheId: string = null;
  edit: boolean = false;
  showProperties: boolean = true;
  geocacheToDisplay;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private geocacheService: GeocacheService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.geocacheId = (urlParameters["$key"]);
    });
    this.geocacheToDisplay = this.geocacheService.findGeocacheDetail(this.geocacheId);

    this.geocacheService.findGeocacheDetail(this.geocacheId).subscribe(dataLastEmittedFromObserver => {
      this.geocacheToDisplay = dataLastEmittedFromObserver;
    })
  }
  editGeocache(){
    this.edit = true;
    this.showProperties = false;
  }

}
