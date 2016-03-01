angular.module('lightshelf.services', [])

.factory('booksFactory', ['$http', function($http) {

  var urlBase = 'url here';
  var booksFactory = {};

  booksFactory.getBooks = function() {
    return $http.get(urlBase);
  };

  booksFactory.getBook = function(id) {
    return $http.get(urlBase + '/' + id);
  };

  return booksFactory;
}]);
