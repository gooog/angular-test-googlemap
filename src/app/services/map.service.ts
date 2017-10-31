import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MapService implements OnInit {

  locations = [
        {name: 'Tbilisi', lat: 41.7151377, lng: 44.827096},
        {name: 'Rustavi', lat: 41.5225612, lng: 45.0430369}
    ];

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  removeLocation(i) {
    console.log('Locations:', i, this.locations);
    this.locations.splice(i, 1);
    console.log('last array:', this.locations);
  }

    findLocation(locationName) {
      return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + locationName + '&key=AIzaSyBI2qfEHOHhY0hfqTzSC_qs1a4LomhVmTI');
    }

    addLocation(data) {
      this.locations.push(
          {name: data.formatted_address, lat: data.geometry.location.lat, lng: data.geometry.location.lng}
      );
    }
}

