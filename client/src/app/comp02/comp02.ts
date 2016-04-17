import { Component } from 'angular2/core';
import { COMP02_CONSTANTS } from "./comp02-config";


@Component({
  providers: [COMP02_CONSTANTS],
  templateUrl: 'app/comp02/comp02.html'
})
export class AppComp02 {
  private title:string;

  constructor(_constants: COMP02_CONSTANTS) {
    this.title = _constants.title;
  }
}
