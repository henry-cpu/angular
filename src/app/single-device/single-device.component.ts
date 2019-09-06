import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../services/device.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.component.html',
  styleUrls: ['./single-device.component.scss']
})
export class SingleDeviceComponent implements OnInit {

  name = 'Device';
  status = 'Status';

  constructor(private deviceService: DeviceService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // snapchot, avoir un snapchot du moment actuel de l'url
    const id = this.route.snapshot.params['id'];
    this.name = this.deviceService.getDeviceById(+id).name;
    this.status = this.deviceService.getDeviceById(+id).status;
  }

}
