export default function (appModule) {
  appModule.config(function ($routeProvider) {
    $routeProvider
      .when("/phones", {
        template: "<phone-list></phone-list>",
      })
      .when("/phones/:phoneId", {
        template: "<phone-detail></phone-detail>",
      })
      .when("/about", {
        template: "<about></about>",
      })
      .when("/test", {
        template: "<angular-detail2></angular-detail2>",
      })
      .otherwise("/phones");
  });
}
