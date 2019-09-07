import { Subject } from 'rxjs';

export class DeviceService {
  deviceSubject = new Subject<any[]>();
  private devices = [
    {
      id: 1,
      name: 'Television',
      status: 'On'
    },
    {
      id: 2,
      name: 'Coffee Maschine',
      status: 'Off'
    },
    {
      id: 3,
      name: 'Light',
      status: 'On'
    },
    {
      id: 1,
      name: 'Toaster',
      status: 'Off'
    },
    {
      id: 5,
      name: 'Camera',
      status: 'On'
    }
  ];
  emitDeviceSubject() {
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
}
