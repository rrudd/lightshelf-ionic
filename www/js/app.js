
angular.module('lightshelf', ['ionic', 'lightshelf.controllers', 'lightshelf.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.style(1);
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/side-menu.html'
  })

  .state('app.dash', {
    url: '/dash',
    views: {
      'menuContent': {
        templateUrl: 'templates/dash.html'
      }
    }
  })

  .state('app.books', {
      url: '/books',
      views: {
        'menuContent': {
          templateUrl: 'templates/book-list.html',
          controller: 'BookListController',
          controllerAs: 'booklistVm'
        }
      }
    })
    .state('app.book-detail', {
      url: '/books/:bookId',
      views: {
        'menuContent': {
          templateUrl: 'templates/book-detail.html',
          controller: 'BookDetailController',
          controllerAs: 'bookVm'
        }
      }
    })

  .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'templates/account.html',
        controller: 'AccountController',
        controllerAs: 'accountVm'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/dash');

});
