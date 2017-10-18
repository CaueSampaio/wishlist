angular.module('product').controller("productController", function($scope) {
    $scope.products = [ 
        {imgUrl: "https://http2.mlstatic.com/blusa-gola-redonda-grizzly-lrg-diamond-primitive-dgk-palace-D_NQ_NP_625425-MLB25445063171_032017-F.webp", name: "Camiseta", price: "120,00"},
    ];

    $scope.wishList = [];

    $scope.addProduct = function(product) {
        $scope.products.push(angular.copy(product));

        console.log($scope.product);
    };

    $scope.deleteProduct = function(index) {
        $scope.products.splice(index, 1);
    };

    $scope.addWishList = function(product) {
        $scope.wishList.push(angular.copy(product));
        console.log($scope.wishList);
    }

    $scope.removeWishList = function(index) {
        $scope.wishList.splice(index, 1);
    }
})