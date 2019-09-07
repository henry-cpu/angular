import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../services/device.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit {

  constructor(private deviceservice: DeviceService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 3000
    );
  }
  devices: any[];
  devicesSubscription: Subscription;
  isAuth = false;
  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );
  ngOnInit() {
    this.devicesSubscription = this.deviceservice.deviceSubject.subscribe(
      (devices: any[]) => {
        this.devices = devices;
      }
    );
    this.deviceservice.emitDeviceSubject();
  }
  // ..............
  // Event binding
  onAllTurnOn() {
    this.deviceservice.switchOnAll();
  }
  onAllTurnOff() {
    /*if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.deviceservice.switchOffAll();
    } else {
      return null;
    }*/
    this.deviceservice.switchOffAll();
  }

}
// bouton toogle
// deviceStatBol(count) {
//   if (this.devices[count].status === 'On') {
//     return true;
//   } else if (this.devices[count].status === 'Off') {
//     return  false;
//   }
// }
