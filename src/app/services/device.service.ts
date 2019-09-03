export class DeviceService {
  devices = [
    {
      name: 'Television',
      status: 'On'
    },
    {
      name: 'Coffee Maschine',
      status: 'Off'
    },
    {
      name: 'Light',
      status: 'On'
    }
  ];
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
