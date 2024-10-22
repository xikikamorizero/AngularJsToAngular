"use strict";

angular
  .module("angularJs")
  .component("angularJs", {
    bindings: {
      value: "<",
      change: "&",
    },
    template: `
    <h2>{{$ctrl.value}}</h2>
    <button ng-click="$ctrl.onChangeC()">change</button>
  `,
    controller: ["angularS",
      function (angularS) {
        this.data = angularS.getData();
        console.log(this.data)
        this.onChangeC = () => {
          console.log(2);
          this.change("Hello");
        };
      },
    ],
  });
