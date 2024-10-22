"use strict";

angular.module("angularJs").component("angularJs", {
  bindings: {
    value: "<",
    change: '&'
  },
  template: `
    <h2>{{$ctrl.value}}</h2>
    <button ng-click="$ctrl.onChangeC()">change</button>
  `,
  controller: function () {
    this.onChangeC = () => {
      console.log(2)
      this.change('Hello')
    };
  },
});
