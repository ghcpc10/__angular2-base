import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {AppHome, AppComp01, AppComp02, AppComp03} from './main-config';



@Component({
  selector: 'my-app',
  templateUrl: 'app/_main/main.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/home', name:'Home', component: AppHome, useAsDefault: true},
  {path:'/comp01', name:'Comp01', component: AppComp01},
  {path:'/comp02', name:'Comp02', component: AppComp02},
  {path:'/comp03', name:'Comp03', component: AppComp03}
])
export class MyApp {
  private title:string = 'This is My APP';
}
