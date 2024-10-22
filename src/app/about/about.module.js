"use strict";
import { AngularComponent } from "../angular/angular.component";
import { downgradeComponent } from "@angular/upgrade/static";
import angular from "angular";


angular
  .module("about", [])
  .directive(
    "angularDetail",
    downgradeComponent({ component: AngularComponent })
  );
