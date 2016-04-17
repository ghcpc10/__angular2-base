import { Component } from 'angular2/core';
import { HOME_CONSTANTS } from "./home-config";


@Component({
  selector: 'app-home-component',
  providers: [HOME_CONSTANTS],
  templateUrl: 'app/home/home.html'
})
export class AppHome {
  private title:string;

  constructor(_constants: HOME_CONSTANTS) {
    this.title = _constants.title;
  }
}
