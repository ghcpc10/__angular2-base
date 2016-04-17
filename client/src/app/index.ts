import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { MyApp } from './_main/main';


bootstrap(MyApp, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS
]);
