import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AB-project';
  app_version: number;

  constructor() {
    this.app_version = this.getRandomInt(2);
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
