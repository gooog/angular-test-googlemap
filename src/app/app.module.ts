import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { LocationDetectorComponent } from './components/location-detector/location-detector.component';
import { LocationListComponent } from './components/location-list/location-list.component';
import {MapService} from './services/map.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    LocationDetectorComponent,
    LocationListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBI2qfEHOHhY0hfqTzSC_qs1a4LomhVmTI'
    })
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
