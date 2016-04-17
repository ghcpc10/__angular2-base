import { Component } from 'angular2/core';
import { COMP01_CONSTANTS } from "./comp01-config";


@Component({
  providers: [COMP01_CONSTANTS],
  templateUrl: 'app/comp01/comp01.html'
})
export class AppComp01 {
  private title:string;

  constructor(_constants: COMP01_CONSTANTS) {
    this.title = _constants.title;
  }
}
