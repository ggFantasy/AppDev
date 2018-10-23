angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.contestsHome', {
    url: '/Home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contestsHome.html',
        controller: 'contestsHomeCtrl'
      }
    }
  })

  .state('menu.upcoming', {
    url: '/Upcoming',
    views: {
      'side-menu21': {
        templateUrl: 'templates/upcoming.html',
        controller: 'upcomingCtrl'
      }
    }
  })

  .state('menu.live', {
    url: '/Live',
    views: {
      'side-menu21': {
        templateUrl: 'templates/live.html',
        controller: 'liveCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.sponsored', {
    url: '/Sponsored',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sponsored.html',
        controller: 'sponsoredCtrl'
      }
    }
  })

  .state('menu.leagueOfLegends', {
    url: '/LoL',
    views: {
      'side-menu21': {
        templateUrl: 'templates/leagueOfLegends.html',
        controller: 'leagueOfLegendsCtrl'
      }
    }
  })

  .state('menu.starCraft2', {
    url: '/sc2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/starCraft2.html',
        controller: 'starCraft2Ctrl'
      }
    }
  })

  .state('menu.counterStrikeGlobalOffensive', {
    url: '/CSGO',
    views: {
      'side-menu21': {
        templateUrl: 'templates/counterStrikeGlobalOffensive.html',
        controller: 'counterStrikeGlobalOffensiveCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/signup')


});