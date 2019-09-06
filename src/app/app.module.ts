import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';

import { DeviceService } from './services/device.service';
import {AuthService} from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { DeviceViewComponent } from './device-view/device-view.component';
import {RouterModule, Routes} from '@angular/router';
import { SingleDeviceComponent } from './single-device/single-device.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuard} from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'devices', canActivate: [AuthGuard], component: DeviceViewComponent},
  { path: 'devices/:id', canActivate: [AuthGuard], component: SingleDeviceComponent},
  { path: 'auth',  component: AuthComponent},
  { path: '', canActivate: [AuthGuard], component: DeviceViewComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    AuthComponent,
    DeviceViewComponent,
    SingleDeviceComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DeviceService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
