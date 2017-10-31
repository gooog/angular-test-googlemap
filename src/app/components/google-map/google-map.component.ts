import { Component, OnInit } from '@angular/core';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  myLocations: any[];
  mapInit = { lat: 41.7151377, lng: 44.827096 };

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.myLocations = this.mapService.locations;
    console.log(this.myLocations);
  }

}