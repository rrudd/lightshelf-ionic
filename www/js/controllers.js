angular.module('lightshelf.controllers', [])

.controller('BookListController', function(booksFactory, $ionicLoading) {
  $ionicLoading.show({
    template: '<ion-spinner></ion-spinner>'
  });

  var vm = this;

  vm.doRefresh = function() {
    $log("refreshing");
    booksFactory.getBooks().success(function(res) {
      vm.books = res.data;
      $log(res);
    }).finally(function() {
      vm.$broadcast('scroll.refreshComplete');
    });
  };

  vm.books = booksFactory.getBooks().then(function(res){
    vm.books = res.data;
    $ionicLoading.hide();
  });
})

.controller('BookDetailController', function($stateParams, booksFactory, $ionicLoading) {
  $ionicLoading.show({
    template: '<ion-spinner></ion-spinner>'
  });

  var vm = this;
  booksFactory.getBook($stateParams.bookId).then(function(res){
    vm.book = res.data;
    $ionicLoading.hide();
  });
})

.controller('AccountController', function() {
  var vm = this;
  vm.settings = {
    enableFriends: true
  };
})

.controller('MenuController', function($ionicSideMenuDelegate) {
  var vm = this;
  vm.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('ListController', function() {
  var vm = this;
  vm.items = [
    {icon: 'clipboard', title: 'Dashboard', url: 'dash'},
    {icon: 'ios-book-outline', title: 'Library', url: 'books'},
    {icon: 'person', title: 'Account', url: 'account'}
  ];
});
