import { Component, OnInit } from '@angular/core';
import {MapService} from '../../services/map.service';
declare var google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  myLocations: any[];
  mapInit = { lat: 41.7151377, lng: 44.827096 };
  map: any;
  markers = [];

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.myLocations = this.mapService.locations;
    console.log(this.myLocations);

    setTimeout( () => {
        this.initMap();
        this.makeMarkers();
    }, 3000);

    this.mapService.locationsChange.subscribe(() => {
       this.makeMarkers();
    });
  }

  makeMarkers() {
      this.clearMarkers();
      this.myLocations = this.mapService.locations;
      this.myLocations.forEach( (location) => {
          const marker = new google.maps.Marker({
              position: {lat: location.lat, lng: location.lng}
          });
          this.markers.push(marker);
          this.setMarkers(this.map);
      });

      console.log('makePins called!');
  }

  clearMarkers() {
      this.setMarkers(null);
  }

  setMarkers(map) {
      this.markers.forEach((marker) => {
         marker.setMap(map);
      });
  }

    initMap() {
        const uluru = {lat: this.mapInit.lat, lng: this.mapInit.lng};
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: uluru
        });
    }

}
