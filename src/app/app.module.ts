import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { GiaovienApiService } from './data-api/giaovien-api.service';

import { AppComponent } from './app.component';
import { GiaovienComponent } from './component/giaovien/giaovien.component';


@NgModule({
  declarations: [
    AppComponent,
    GiaovienComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      GiaovienApiService
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
