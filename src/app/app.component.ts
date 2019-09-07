import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import set = Reflect.set;
// tslint:disable-next-line:import-spacing
import  { DeviceService } from './services/device.service';
import {Subscription} from 'rxjs';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  secondes: number;
  counterSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    );
    /* dangereous methode
    counter.subscribe(
      (value: number) => {
        this.secondes = value;
      },
      (error: any) => {
        console.log('we have an error!');
      },
      () => {
        console.log('Observable run good!');
      }
    );
     */
  }
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}

