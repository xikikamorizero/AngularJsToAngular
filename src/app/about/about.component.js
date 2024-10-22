"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("about").component("about", {
  templateUrl: "./app/about/about.template.html",
  controller: [
    "$scope",
    function AboutController($scope) {
      var self = this;
      self.title = "Angular";

      self.onchangeC = function (e) {
        console.log("dsdsdss"); 
        self.title = e;
      };

      self.onButtonClick = function(){
        self.title = '52'
      }
    },
  ],
});
