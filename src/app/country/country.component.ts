import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ApiData } from '../Interface';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit,OnChanges {

  public region;
  public arg;
  public someData;
  public countriesData: any;
  public responseData:ApiData;
  constructor(private _route: ActivatedRoute, private http: HttpService, private location: Location, private router: Router,private toastr: ToastrService ) { }

  ngOnInit() {
    this.region = this._route.snapshot.paramMap.get('region');
    this.arg = this._route.snapshot.paramMap.get('arg')
    this.httpGetCountries(this.arg,this.region);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
  }

  goBack(): any {
    this.location.back();
    this.region = this.getRoutes();
    this.arg = this.getRoutesArg();
    this.httpGetCountries(this.arg,this.region);
  }

  goLanguage(lang): any {
    this.httpGetCountries('lang',lang);
    this.router.navigate(['/countries/lang/' + lang]);
  }

  goCurrency(currency): any {
    this.httpGetCountries('currency',currency);
    this.router.navigate(['/countries/currency/' + currency]);
  }

  goRegion(): any {
    this.router.navigate(['/regions']);
  }

  httpGetCountries(arg,region){
    this.http.getCountries(arg,region).subscribe(
      data => {
        this.countriesData = data;
        this.responseData = this.countriesData;
      },
      error => {
        console.log(error.errorMessage);
        this.toastr.error('No Data By This Name', 'Sorry!', {timeOut: 3000});
      }
    );
  }

  getRoutesArg(){
    return this._route.snapshot.paramMap.get('arg');
  }

  getRoutes(){
    return this._route.snapshot.paramMap.get('region');
  }
}
