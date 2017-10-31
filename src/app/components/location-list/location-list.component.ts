import { Component, OnInit } from '@angular/core';
import {MapService} from '../../services/map.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  myLocations: any[];

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.myLocations = this.mapService.locations;
  }

  onDelete(i) {
      console.log('sds');
    this.mapService.removeLocation(i);
  }

}
