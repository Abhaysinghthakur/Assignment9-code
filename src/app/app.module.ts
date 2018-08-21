import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { CountryComponent } from './country/country.component';
import { SingleCountryComponent } from './single-country/single-country.component';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'
import { HttpService } from './http.service';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    CountryComponent,
    SingleCountryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),


    RouterModule.forRoot([
      {path:'regions',component:RegionsComponent},
      {path:'countries/:arg/:region',component:CountryComponent},
      {path:'country/:countryName',component:SingleCountryComponent},
      {path:'',component:RegionsComponent,pathMatch:'full'},
      {path:'**',component:RegionsComponent}
    ]),
    SharedModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
