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
        console.log("dsdsdss"); // <-- здесь проверка срабатывания
        self.title = e;
        $scope.$apply(); // чтобы обновить в AngularJS
      };

      self.onButtonClick = function(){
        console.log(52)
        self.title = '52'
      }
    },
  ],
});
