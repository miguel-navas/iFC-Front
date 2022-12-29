import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopUpService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/copas.geojson';
  estadios: string = '/assets/data/catar.geojson';

  constructor(
    private http: HttpClient,
    private popupService: PopUpService
    ) { }

  static scaledRadius(val: number, maxVal: number): number {
    return 20 * (val / maxVal);
  }

  makeCapitalMarkers(map: L.Map): void {
    var ballIcon = L.icon({
      iconUrl: '/assets/icon/ball_icon.png',
      iconSize: [20, 20]
      });

    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon],{icon: ballIcon});

        marker.bindPopup(this.popupService.makeCapitalPopup(c.properties));

        marker.addTo(map);
      }
    });
  }

  makeEstadioMarkers(map: L.Map): void {
    var ballIcon = L.icon({
      iconUrl: '/assets/icon/stadium_icon.png',
      iconSize: [24, 24]
      });

    this.http.get(this.estadios).subscribe((res: any) => {
      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const marker = L.marker([lat, lon],{icon: ballIcon});

        marker.bindPopup(this.popupService.makeCapitalPopup(c.properties));

        marker.addTo(map);
      }
    });
  }

  makeCapitalCircleMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {

      const maxPop = Math.max(...res.features.map((x: { properties: { population: any; }; }) => x.properties.population), 0);

      for (const c of res.features) {
        const lon = c.geometry.coordinates[0];
        const lat = c.geometry.coordinates[1];
        const circle = L.circleMarker([lat, lon], {
          radius: MarkerService.scaledRadius(c.properties.population, maxPop)
        });

        circle.addTo(map);
      }
    });
  }
}
