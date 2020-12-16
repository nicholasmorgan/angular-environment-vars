import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppConfigService } from './services/app-config.service';
import { catchError, map, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient, private environment: AppConfigService) {
    this.getWarehouseDetails();
  }

  getWarehouseDetails() {
    console.log('ENV: ', this.environment.config.url);
    const url = `/${this.environment.config.url}/shop/stocks`;
    fetch(url)
      .then((r) => r.json())
      .then((j) => {
        console.log(j);
      });
  }

  title = 'angular-app';
}
