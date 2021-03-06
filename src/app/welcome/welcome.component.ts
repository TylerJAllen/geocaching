import { Component, Input, OnInit } from '@angular/core';
import { GeocacheService } from '../geocache.service';
import { Geocache } from '../geocache.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [GeocacheService]
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router, private geocacheService: GeocacheService) { }

  ngOnInit() {
  }
}
