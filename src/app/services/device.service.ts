import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class DeviceService {
  deviceSubject = new Subject<any[]>();
  private devices = [
    {
      id: 1,
      name: 'Television',
      status: 'On'
    }
  ];

  constructor(private  httpClient: HttpClient) {}
  emitDeviceSubject() {
    //slice = copie de l'arret device
    this.deviceSubject.next(this.devices.slice());
  }
  getDeviceById(id: number) {
    const device = this.devices.find(
      (deviceObject) => {
        return deviceObject.id === id;
      }
    );
    return device;
  }
  switchOnAll() {
    console.log('Turn everything on');
    // tslint:disable-next-line:prefer-for-of
    for (let count = 0; count < this.devices.length; count++) {
      this.devices[count].status = 'On';
    }
  }
  switchOffAll() {
    console.log('Turn everything on');
    // tslint:disable-next-line:prefer-for-of
    for (let count = 0; count < this.devices.length; count++) {
      this.devices[count].status = 'Off';
    }
    this.emitDeviceSubject();
  }
  switchOnOne(index: number) {
    this.devices[index].status = 'On';
    this.emitDeviceSubject();
  }
  switchOffOne(index: number) {
    this.devices[index].status = 'Off';
    this.emitDeviceSubject();
  }
  addDevice(name: string, status: string) {
    const deviceOject = {
      id: 0,
      name: '',
      status: ''
    };

    const position = this.devices[this.devices.length - 1].id;
    deviceOject.name = name;
    deviceOject.status = status;
    deviceOject.id = position + 1;

    this.devices.push(deviceOject);
    this.emitDeviceSubject();
  }
  saveDevicesToServer() {
    //post instead put allows to create a several identical devices in the database, witch is not recommended
    this.httpClient
      .put('https://http-client-demo-42839.firebaseio.com/devices.json', this.devices)
      .subscribe(
        () => {
          console.log('Save completed !');
        },
        (error) => {
          console.log('Error detected by saving ! ' + error);
        }
      );
  }
  getDevicesFromServer() {
    this.httpClient
      .get<any[]>('https://http-client-demo-42839.firebaseio.com/devices.json')
      .subscribe(
        (response) => {
          this.devices = response;
          console.log('everything was good downloaded !');
          this.emitDeviceSubject();
        },
        (error) => {
          console.log('error by downloading !' + error);
        }

      );
  }
}

