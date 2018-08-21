import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment9';
  lang:string;
  currency:string;
  counter = 1;
  constructor(private router:Router){}

  searchLang(){
      this.router.navigate(['/countries/lang',this.lang]);
      window.location.reload();
  }

  searchCurrency(){
      this.router.navigate(['/countries/currency',this.currency]);
      window.location.reload();
    }
}
