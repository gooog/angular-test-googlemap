import {Component, OnDestroy, OnInit} from '@angular/core';
import {MapService} from '../../services/map.service';
import {MapConfig} from './map.config';
declare const google: any;

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit, OnDestroy {

    myLocations: any[];
    mapInit = MapConfig.InitCoords;
    map: any;
    markers = [];
    subscription: any;

    constructor(private mapService: MapService) { }

    ngOnInit() {
    this.myLocations = this.mapService.locations;

    this.mapService.locationsChange.subscribe(() => {
       this.makeMarkers();
    });

    this. loadScript();
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
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
    }

    clearMarkers() {
      this.setMarkers(null);
      this.markers = [];
    }

    setMarkers(map) {
      this.markers.forEach((marker) => {
         marker.setMap(map);
      });
    }

    initMap() {
        const uluru = {lat: this.mapInit.lat, lng: this.mapInit.lng};
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            center: uluru
        });
    }

    loadScript() {
        const node = document.createElement('script');
        node.src = MapConfig.GOOGLE_MAPS_API_URL + MapConfig.GOOGLE_MAPS_API_KEY;
        node.id = 'googleMapsAPI';
        document.getElementsByTagName('head')[0].appendChild(node);
        node.addEventListener('load', () => {
            this.initMap();
            this.makeMarkers();
        });
    }

}
