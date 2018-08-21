import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
import { HttpService } from '../http.service';
import {Location} from '@angular/common'
import { ApiData } from '../Interface';


@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {

  private name:string;
  countryData:any;
  responseData:ApiData;
  constructor(private http:HttpService,private _route:ActivatedRoute,private location:Location,private router:Router) { }

  ngOnInit() {
    this.name = this._route.snapshot.paramMap.get('countryName');

    this.http.getcountry(this.name).subscribe(
      data =>{
        this.countryData = data;
        this.responseData = this.countryData[0];
      },
      error =>{
        console.log(error.errorMessage)
      }
    )

  }


  goBack():any{
    this.location.back();
  }

  goRegion():any{
    this.router.navigate(['/regions'])
  }
}
