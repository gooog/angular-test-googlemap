import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'app-location-detector',
  templateUrl: './location-detector.component.html',
  styleUrls: ['./location-detector.component.css']
})
export class LocationDetectorComponent implements OnInit {
  foundLocations: any[];
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  search(locationName) {
    this.mapService.findLocation(locationName).subscribe( (data: any) => {
        if (data.status === 'OK') {
          console.log(data);
          this.foundLocations = data.results;
        }
    });
  }

    onAdd(index) {
      this.mapService.addLocation(this.foundLocations[index]);
      this.foundLocations = null;
      this.searchInput.nativeElement.value = '';
    }

    enterKeyDetect(event) {
      if (event.keyCode === 13) {
          this.search(event.target.value);
      }
    }

}
