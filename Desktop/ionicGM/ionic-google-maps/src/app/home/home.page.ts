import { Component } from '@angular/core';
import { GoogleMaps, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps";

import { Platform } from "@ionic/angular"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public platform: Platform) {}

  ngAfterViewInit() {
    this.platform.ready().then(() => this.loadMap());
  }

  loadMap() {
    const map = GoogleMaps.create('map');
    map.one( GoogleMapsEvent.MAP_READY ).then((data: any) => {
      const coordinates: LatLng = new LatLng(41, -87);
      map.setCameraTarget(coordinates);
      map.setCameraZoom(8);
    });
  }

}
