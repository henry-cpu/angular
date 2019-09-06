export class DeviceService {
  devices = [
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
    }
  ];

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
  }
  switchOnOne(index: number) {
    this.devices[index].status = 'On';
  }
  switchOffOne(index: number) {
    this.devices[index].status = 'Off';
  }
}
