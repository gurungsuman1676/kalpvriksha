;
(function () {
    "use strict";
    angular
        .module("Kalpvriksha")

        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise(function ($injector) {
                var $state = $injector.get("$state");
                $state.go("dashboard");
            });

            $stateProvider

                .state('login', {
                    url: '/login',
                    templateUrl: 'app/session/templates/login.html',
                    controller: "LoginController",
                    controllerAs: 'ctrl'
                })

                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: "DashboardController",
                    controllerAs: 'ctrl'
                })


                //.state('adminDashboard', {
                //    url: '/admin',
                //    templateUrl: 'app/admin/dashboard/adminDashboard.html',
                //    controller: "AdminDashboardController",
                //    controllerAs: 'ctrl'
                //})

        });

})();
