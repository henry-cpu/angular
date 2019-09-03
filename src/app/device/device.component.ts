import {Component, Input, OnInit} from '@angular/core';
import { DeviceService} from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  @Input() deviceName: string;
  @Input() deviceStatus: string;
  @Input() IndexOfDevice: number;
  isAuthdev = false;
  constructor(private deviceService: DeviceService) {
    setTimeout(
      () => {
        this.isAuthdev = true;
      }, 3000
    );
  }

  ngOnInit() {
  }
  onTurnOn() {
    this.deviceService.switchOnOne(this.IndexOfDevice);
  }
  onTurnOff() {
    this.deviceService.switchOffOne(this.IndexOfDevice);
  }
  getStatus() {
    return this.deviceStatus;
  }
  getColorText() {
    if (this.deviceStatus === 'On') {
      // return 'darkslategray';
      return '#f0932b';
    } else if (this.deviceStatus === 'Off') {
      // return 'gray';
      return 'red';
    }
  }
  onTurn() {
    if (this.deviceStatus === 'On') {
      this.deviceStatus = 'Off';
    } else if (this.deviceStatus === 'Off') {
      this.deviceStatus = 'On';
    }
  }
}

// bouton toogle
/*
  @Input() statBol: boolean;

  onTurnOn() {
    this.deviceStatus = 'On';
  }
  onTurnOff() {
    this.deviceStatus = 'Off';
  }
 */
