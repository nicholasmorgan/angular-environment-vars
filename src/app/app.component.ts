import { Component } from '@angular/core';
import { AppConfigService } from './services/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private environment: AppConfigService) {
    console.log(this.environment.config.name);
  }

  title = 'angular-app';
}
