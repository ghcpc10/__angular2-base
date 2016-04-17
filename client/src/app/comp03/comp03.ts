import { Component } from 'angular2/core';
import { COMP03_CONSTANTS } from "./comp03-config";


@Component({
  providers: [COMP03_CONSTANTS],
  templateUrl: 'app/comp03/comp03.html'
})
export class AppComp03 {
  private title:string;

  constructor(_constants: COMP03_CONSTANTS) {
    this.title = _constants.title;
  }
}
