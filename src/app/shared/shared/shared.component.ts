import { Component, OnInit, Input ,Output,EventEmitter,OnChanges, SimpleChanges} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit,OnChanges {

  @Input() countriesData:any;

  constructor(private router:Router,private location:Location) { }

  @Output() notifyLang:EventEmitter<string> = new EventEmitter<string>();

  @Output() notifyCurrency:EventEmitter<string> = new EventEmitter<string>();


  ngOnInit() {
    
  }

  ngOnChanges(changes:SimpleChanges){
    let data = changes.countriesData;
    this.countriesData = data.currentValue;
  }

  goLanguage(lang): any {
    this.notifyLang.emit(lang);
  }

  goCurrency(currency): any {
    this.notifyCurrency.emit(currency);
  }


}
