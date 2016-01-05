;
(function () {
    "use strict";
    angular
        .module("Kalpvriksha")
        .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

            $urlRouterProvider.otherwise(function ($injector) {
                var $state = $injector.get("$state");
                $state.go("login");
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

            $mdThemingProvider
                .theme('default')
                .primaryPalette('blue-grey', {
                    'default': '600'
                })
                .accentPalette('cyan', {
                    'default': '500'
                })
                .warnPalette('defaultPrimary');

            $mdThemingProvider.theme('dark', 'default')
                .primaryPalette('defaultPrimary')
                .dark();

            $mdThemingProvider.theme('grey', 'default')
                .primaryPalette('grey');

            $mdThemingProvider.theme('custom', 'default')
                .primaryPalette('defaultPrimary', {
                    'hue-1': '50'
                });

            $mdThemingProvider.definePalette('defaultPrimary', {
                '50':  '#FFFFFF',
                '100': 'rgb(255, 198, 197)',
                '200': '#E75753',
                '300': '#E75753',
                '400': '#E75753',
                '500': '#E75753',
                '600': '#E75753',
                '700': '#E75753',
                '800': '#E75753',
                '900': '#E75753',
                'A100': '#E75753',
                'A200': '#E75753',
                'A400': '#E75753',
                'A700': '#E75753'
            });
        });
})();