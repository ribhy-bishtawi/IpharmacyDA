import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
/**
+ * Generated class for the MapPage page.
+ *
+ * See https://ionicframework.com/docs/components/#navigation for more info on
+ * Ionic pages and navigation.
+ */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: any;
  directions: any;
  duration: number;
  destination: any;
  pharmacy: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pharmacy = navParams.get('pharmacy');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    const currentLocation = this.navParams.get("currentLocation")
    const pharmacyLongLat = this.pharmacy['Location'].split(",").map(x => parseFloat(x));
    mapboxgl.accessToken = 'pk.eyJ1IjoicmliaHliaXNoIiwiYSI6ImNqazB0bTQzeDAxa2szcG54MXQ1dnd1NTIifQ.4Z1_RzWi98bYoUmZ2nfFtw';
    this.directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving-traffic',
      interactive: false
    });
    this.map = new mapboxgl.Map({
      container: 'map',
       center: currentLocation,
      zoom: 11,
      style: 'mapbox://styles/mapbox/streets-v10'
    });
    this.map.addControl(this.directions);
    this.map.addControl(new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy: true
        },
        trackUserLocation:true
    }));
    const mapLoadHandler = data => {
      if (data.dataType === 'source' && data.isSourceLoaded) {
        console.log('data loaded', data);
        this.directions.setOrigin(currentLocation);
        this.directions.setDestination(pharmacyLongLat);
        ;
        this.directions.on('route', routes => {
          if (routes.route.length === 0) return;
          this.duration = Math.floor(routes.route[0].duration / 60);
        })
        // stop listening to map.on('data')
        this.map.off('data', mapLoadHandler);
      }
    };

    this.map.on('data', mapLoadHandler);
  }

}