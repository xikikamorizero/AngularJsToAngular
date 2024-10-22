import "angular-animate";
import "angular-route";

import "./core/phone/phone.module";
import "./core/phone/phone.service";
import "./core/core.module";

import "./phone-detail/phone-detail.module";
import "./phone-detail/phone-detail.component";

import "./phone-list/phone-list.module";
import "./phone-list/phone-list.component";
import "./about/about.module";
import "./about/about.component";
import "./angularJs/angularJs.module";
import "./angularJs/angularJs.component";
import "./about/about.component";
import { Angular2Component } from "./angular2/angular2.component";
import { downgradeComponent , downgradeInjectable} from "@angular/upgrade/static";
import angular from "angular";
import {AngularDataService} from './angular/angular.service'

// Define the `phonecatApp` module
export default angular
  .module("phonecatApp", [
    "ngAnimate",
    "ngRoute",
    "core",
    "phoneDetail",
    "phoneList",
    "about",
    "angularJs",
  ])
  .factory("angularS", downgradeInjectable(AngularDataService))
  .directive(
    "angularDetail2",
    downgradeComponent({ component: Angular2Component })
  );
