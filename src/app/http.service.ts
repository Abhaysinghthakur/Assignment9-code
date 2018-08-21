import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private feildCountries = '?fields=name;capital;currencies;languages;flag';
  private feildCountry ='?fields=name;capital;currencies;languages;flag;region;subregion;population'
  public url = 'https://restcountries.eu/rest/v2/';

  constructor(private http:HttpClient) { }

  getCountries = (arg,region) =>{
    return this.http.get(this.url+arg+'/'+region+this.feildCountries);
  }



  getcountry = (name) =>{
    return this.http.get(this.url+'name/'+name+this.feildCountry)
  }
  
  private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
