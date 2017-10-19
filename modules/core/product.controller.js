angular.module('product').controller("productController", function ($scope) {
    $scope.products = [
        { imgUrl: "https://http2.mlstatic.com/blusa-gola-redonda-grizzly-lrg-diamond-primitive-dgk-palace-D_NQ_NP_625425-MLB25445063171_032017-F.webp", name: "Camiseta", price: "120,00" },
    ];

    $scope.wishList = [];

    $scope.addProduct = function (product) {
        product.price = document.getElementById("editPrice").value;
        $scope.products.push(angular.copy(product));
        $scope.cleanForm();
    };

    $scope.deleteProduct = function (index) {
        $scope.products.splice(index, 1);
    };

    $scope.addWishList = function (product) {
        $scope.wishList.push(angular.copy(product));
    }

    $scope.removeWishList = function (index) {
        $scope.wishList.splice(index, 1);
    }

    $scope.cleanForm = function () {
        delete $scope.product.imgUrl;
        delete $scope.product.name;
        delete $scope.product.price;
        $scope.addProductForm.$setPristine();
    }

    $scope.editProduct = function (index, product) {
        //opening modal and hiding addproduct        
        var addProductForm = document.getElementById("addproduct");
        addProductForm.style.display = "none";
        var modalEdit = document.getElementById("modal");
        modalEdit.style.display = "block";


        //passing products to edit form
        $scope.imgValue = product.imgUrl;
        $scope.nameValue = product.name;
        $scope.priceValue = product.price;

        $scope.saveProduct = function (object) {
            $scope.products[index].imgUrl = document.getElementById("editImg").value;
            $scope.products[index].name = document.getElementById("editName").value;
            $scope.products[index].price = document.getElementById("editPrice").value;

            $scope.cleanForm();

            //closing modal and opening addproduct
            var modalEdit = document.getElementById("modal");
            modalEdit.style.display = "none";
            var addProductForm = document.getElementById("addproduct");
            addProductForm.style.display = "block";

        };
    }



})