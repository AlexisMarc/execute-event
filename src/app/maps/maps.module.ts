import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//Core Pages Layout Components
import { SharedModule } from '../@pages/components/shared.module';

import { GoogleMapPage } from './google/google.component';
import { MapsRoutes  } from './maps.routing';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MapsRoutes),
    SharedModule,
  ],
  declarations: [GoogleMapPage]
})
export class MapsModule { }
