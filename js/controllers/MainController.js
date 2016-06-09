app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Top Books in Library';
  $scope.promo = 'Check What\'s on Sale!';
  $scope.products = [
    {
      name: 'The Price of Inequality',
      price: 1,
      pubdate: new Date('2010', '01', '01'),
      cover: 'img/globalization_stiglitz.png',
      likes: 0,
      dislikes: 0,
    },
    {
      name: 'Blowback',
      price: 1,
      pubdate: new Date('2008', '04', '01'),
      cover: 'img/blowback.jpg',
      likes: 0,
      dislikes: 0,
    },
  ];
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes -= 1;
  };
 	$scope.plusOne = function(index) {
   $scope.products[index].likes += 1;
 	};
}]);
