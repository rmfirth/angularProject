var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
// Search for a specified string.
    $scope.images = [
        "https://i.ytimg.com/vi/1ZYbU82GVz4/maxresdefault.jpg",
        "https://i.ytimg.com/vi/77ZozI0rw7w/maxresdefault.jpg",
        "https://i.ytimg.com/vi/gbU2QQpOa70/maxresdefault.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zosQAzidViw85jKo0TyZdEt2R4xGoRwP1tHAYf2sHCvpcbC7",
        "https://www.bensound.com/bensound-img/relaxing.jpg",
        "http://bsnscb.com/data/out/163/39979532-relaxing-wallpapers.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlBg8nISlT4b9RpiNta-uDqTct0kegJA3zxUP6Nv7KEf60850o"
    ];

    $scope.imageIndex = 0;
    $scope.imageSrc = $scope.images[$scope.imageIndex];
    $scope.nextImage = function() {
        $scope.imageIndex = ($scope.imageIndex + 1) % $scope.images.length;
        $scope.imageSrc = $scope.images[$scope.imageIndex];
        $scope.backgroundStuff["background"] = ("url(" + $scope.imageSrc + ")");
    }

    $scope.backgroundStuff = {
        "background" : ("url(" + $scope.imageSrc + ")"),
        "background-repeat" : "no-repeat"
    }

    $scope.prevImage = function() {
        $scope.imageIndex = ($scope.imageIndex + $scope.images.length - 1) % $scope.images.length;
        $scope.imageSrc = $scope.images[$scope.imageIndex];
        $scope.backgroundStuff["background"] = ("url(" + $scope.imageSrc + ")");
    }

    $scope.imageArray = [];
    $scope.searchVideo = function () {
        var url = "https://pixabay.com/api/?key=6766253-c5676f36b0a8e73817e60de84&q=";
        url += $scope.image;
        $http.get(url).then(function (response) {
            //console.log(response);
            $scope.imageSrc = response["data"]["hits"][Math.floor(Math.random() * 100 % ((response["data"]["hits"]).length))]["userImageURL"];

        });
    }

});



